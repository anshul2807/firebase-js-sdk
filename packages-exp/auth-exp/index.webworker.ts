/**
 * @license
 * Copyright 2017 Google LLC
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

import { _getProvider, FirebaseApp, getApp } from '@firebase/app-exp';
import { Auth } from './src/model/public_types';

import { AuthImpl } from './src/core/auth/auth_impl';
import { _initializeAuthInstance } from './src/core/auth/initialize';
import { _ComponentName, registerAuth } from './src/core/auth/register';
import { PersistenceInternal } from './src/core/persistence';
import { _getInstance } from './src/core/util/instantiator';
import { ClientPlatform } from './src/core/util/version';
import { indexedDBLocalPersistence } from './src/platform_browser/persistence/indexed_db';

// Core functionality shared by all clients
export * from './index.shared';

// persistence
export { indexedDBLocalPersistence } from './src/platform_browser/persistence/indexed_db';

registerAuth(ClientPlatform.WORKER);

export function getAuth(app: FirebaseApp = getApp()): Auth {
  // Unlike the other environments, we need to explicitly check if indexedDb is
  // available. That means doing the whole rigamarole
  const auth = _getProvider(
    app,
    _ComponentName.AUTH
  ).getImmediate() as AuthImpl;

  // This promise is intended to float; auth initialization happens in the
  // background, meanwhile the auth object may be used by the app.
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  _getInstance<PersistenceInternal>(indexedDBLocalPersistence)
    ._isAvailable()
    .then(avail => {
      const deps = avail ? { persistence: indexedDBLocalPersistence } : {};
      _initializeAuthInstance(auth, deps);
    });

  return auth;
}
