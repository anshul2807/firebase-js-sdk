/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  FirebaseAppCheck,
  AppCheckProvider,
  AppCheckTokenResult,
  ReCaptchaV3Provider,
  CustomProvider
} from '@firebase/app-check-types';
import {
  activate,
  setTokenAutoRefreshEnabled,
  getToken,
  onTokenChanged
} from './api';
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseAppCheckInternal } from '@firebase/app-check-interop-types';
import {
  getToken as getTokenInternal,
  addTokenListener,
  removeTokenListener
} from './internal-api';
import {
  ReCaptchaV3Provider as ReCaptchaV3ProviderImpl,
  CustomProvider as CustomProviderImpl
} from './providers';
import { Provider } from '@firebase/component';
import { PartialObserver } from '@firebase/util';

import { FirebaseService } from '@firebase/app-types/private';
import { getState, ListenerType } from './state';

export function factory(
  app: FirebaseApp,
  platformLoggerProvider: Provider<'platform-logger'>
): FirebaseAppCheck & FirebaseService {
  return {
    app,
    activate: (
      siteKeyOrProvider:
        | ReCaptchaV3Provider
        | CustomProvider
        | AppCheckProvider
        | string,
      isTokenAutoRefreshEnabled?: boolean
    ) =>
      activate(
        app,
        // Public types of ReCaptchaV3Provider/CustomProvider don't
        // expose getToken() and aren't recognized as the internal
        // class version of themselves.
        siteKeyOrProvider as
          | ReCaptchaV3ProviderImpl
          | CustomProviderImpl
          | AppCheckProvider
          | string,
        platformLoggerProvider,
        isTokenAutoRefreshEnabled
      ),
    setTokenAutoRefreshEnabled: (isTokenAutoRefreshEnabled: boolean) =>
      setTokenAutoRefreshEnabled(app, isTokenAutoRefreshEnabled),
    getToken: forceRefresh =>
      getToken(app, platformLoggerProvider, forceRefresh),
    onTokenChanged: (
      onNextOrObserver:
        | ((tokenResult: AppCheckTokenResult) => void)
        | PartialObserver<AppCheckTokenResult>,
      onError?: (error: Error) => void,
      onCompletion?: () => void
    ) =>
      onTokenChanged(
        app,
        platformLoggerProvider,
        /**
         * This can still be an observer. Need to do this casting because
         * according to Typescript: "Implementation signatures of overloads
         * are not externally visible"
         */
        onNextOrObserver as (tokenResult: AppCheckTokenResult) => void,
        onError,
        onCompletion
      ),
    INTERNAL: {
      delete: () => {
        const { tokenObservers } = getState(app);
        for (const tokenObserver of tokenObservers) {
          removeTokenListener(app, tokenObserver.next);
        }
        return Promise.resolve();
      }
    }
  };
}

export function internalFactory(
  app: FirebaseApp,
  platformLoggerProvider: Provider<'platform-logger'>
): FirebaseAppCheckInternal {
  return {
    getToken: forceRefresh =>
      getTokenInternal(app, platformLoggerProvider, forceRefresh),
    addTokenListener: listener =>
      addTokenListener(
        app,
        platformLoggerProvider,
        ListenerType.INTERNAL,
        listener
      ),
    removeTokenListener: listener => removeTokenListener(app, listener)
  };
}
