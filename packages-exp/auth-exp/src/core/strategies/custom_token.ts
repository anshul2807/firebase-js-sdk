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
  Auth,
  CustomTokenProvider,
  UserCredential
} from '../../model/public_types';

import { signInWithCustomToken as getIdTokenResponse } from '../../api/authentication/custom_token';
import { IdTokenResponse } from '../../model/id_token';
import { UserCredentialImpl } from '../user/user_credential_impl';
import { _castAuth } from '../auth/auth_impl';
import { OperationType } from '../../model/enums';
import { _assert } from '../util/assert';
import { AuthErrorCode } from '../errors';
import { UserInternal } from '../../model/user';

/**
 * Asynchronously signs in using a custom token.
 *
 * @remarks
 * Custom tokens are used to integrate Firebase Auth with existing auth systems, and must
 * be generated by an auth backend using the
 * {@link https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth#createcustomtoken | createCustomToken}
 * method in the {@link https://firebase.google.com/docs/auth/admin | Admin SDK} .
 *
 * Fails with an error if the token is invalid, expired, or not accepted by the Firebase Auth service.
 *
 * @param auth - The Auth instance.
 * @param customToken - The custom token to sign in with.
 *
 * @public
 */
export async function signInWithCustomToken(
  auth: Auth,
  customToken: string
): Promise<UserCredential> {
  const authInternal = _castAuth(auth);
  const response: IdTokenResponse = await getIdTokenResponse(authInternal, {
    token: customToken,
    returnSecureToken: true
  });
  const cred = await UserCredentialImpl._fromIdTokenResponse(
    authInternal,
    OperationType.SIGN_IN,
    response
  );
  await authInternal._updateCurrentUser(cred.user);
  return cred;
}

/**
 * Sets the custom token provider to be used by the given Auth instance.
 *
 * @remarks
 * The custom token provider is invoked when a new Firebase ID token is requested and no
 * refresh token is present (such as in passthrough mode). The provider object must implement a
 * `getCustomToken()` callback, which obtains a custom token to exchange for a new Firebase ID
 * token. For instance:
 *
 * ```js
 * setCustomTokenProvider(auth, {
 *   async getCustomToken(): Promise<string> {
 *     return requestNewCustomToken();
 *   }
 * });
 * ```
 *
 * @param auth - The Auth instance.
 * @param provider - A `CustomTokenProvider` object, which implements a callback that is invoked
 * when a new Firebase ID token is requested and no refresh token is present.
 */
export function setCustomTokenProvider(
  auth: Auth,
  provider: CustomTokenProvider
): void {
  const authInternal = _castAuth(auth);
  authInternal._refreshWithCustomTokenProvider = async () => {
    const token = await provider.getCustomToken();
    const response: IdTokenResponse = await getIdTokenResponse(authInternal, {
      token,
      returnSecureToken: true
    });
    _assert(
      response.localId === authInternal.currentUser?.uid,
      AuthErrorCode.INTERNAL_ERROR
    );
    const user = authInternal.currentUser as UserInternal;
    user.stsTokenManager.updateFromServerResponse(response);
    return response.idToken ?? null;
  };
}

/**
 * Removes the current custom token provider that was set by {@link setCustomTokenProvider}.
 *
 * @param auth - The Auth instance.
 */
export function clearCustomTokenProvider(auth: Auth): void {
  const authInternal = _castAuth(auth);
  authInternal._refreshWithCustomTokenProvider = null;
}
