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

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as request from 'request';
import * as sinon from 'sinon';
import * as firebase from '../src/api';
import { base64 } from '@firebase/util';
import { _FirebaseApp } from '@firebase/app-types/private';

const expect = chai.expect;

before(() => {
  chai.use(chaiAsPromised);
});

describe('Testing Module Tests', function () {
  let sandbox: sinon.SinonSandbox;
  beforeEach(function () {
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
    sandbox && sandbox.restore();
  });

  it('assertSucceeds() iff success', async function () {
    const success = Promise.resolve('success');
    const failure = Promise.reject('failure');
    await firebase.assertSucceeds(success).catch(() => {
      throw new Error('Expected success to succeed.');
    });
    await firebase
      .assertSucceeds(failure)
      .then(() => {
        throw new Error('Expected failure to fail.');
      })
      .catch(() => {});
  });

  it('assertFails() iff PERMISSION_DENIED', async function () {
    const success = Promise.resolve('success');
    const permissionDenied = Promise.reject({
      message: 'PERMISSION_DENIED'
    });
    const otherFailure = Promise.reject('failure');
    await firebase
      .assertFails(success)
      .then(() => {
        throw new Error('Expected success to fail.');
      })
      .catch(() => {});

    await firebase.assertFails(permissionDenied).catch(() => {
      throw new Error('Expected permissionDenied to succeed.');
    });

    await firebase
      .assertFails(otherFailure)
      .then(() => {
        throw new Error('Expected otherFailure to fail.');
      })
      .catch(() => {});
  });

  it('assertFails() if code is permission-denied', async function () {
    const success = Promise.resolve('success');
    const permissionDenied = Promise.reject({
      code: 'permission-denied'
    });
    const otherFailure = Promise.reject('failure');
    await firebase
      .assertFails(success)
      .then(() => {
        throw new Error('Expected success to fail.');
      })
      .catch(() => {});

    await firebase.assertFails(permissionDenied).catch(() => {
      throw new Error('Expected permissionDenied to succeed.');
    });

    await firebase
      .assertFails(otherFailure)
      .then(() => {
        throw new Error('Expected otherFailure to fail.');
      })
      .catch(() => {});
  });

  it('assertFails() if code is PERMISSION_DENIED', async function () {
    const success = Promise.resolve('success');
    const permissionDenied = Promise.reject({
      code: 'PERMISSION_DENIED'
    });
    const otherFailure = Promise.reject('failure');
    await firebase
      .assertFails(success)
      .then(() => {
        throw new Error('Expected success to fail.');
      })
      .catch(() => {});

    await firebase.assertFails(permissionDenied).catch(() => {
      throw new Error('Expected permissionDenied to succeed.');
    });

    await firebase
      .assertFails(otherFailure)
      .then(() => {
        throw new Error('Expected otherFailure to fail.');
      })
      .catch(() => {});
  });

  it('assertFails() if message is Permission denied', async function () {
    const success = Promise.resolve('success');
    const permissionDenied = Promise.reject({
      message: 'Permission denied'
    });
    const otherFailure = Promise.reject('failure');
    await firebase
      .assertFails(success)
      .then(() => {
        throw new Error('Expected success to fail.');
      })
      .catch(() => {});

    await firebase.assertFails(permissionDenied).catch(() => {
      throw new Error('Expected permissionDenied to succeed.');
    });

    await firebase
      .assertFails(otherFailure)
      .then(() => {
        throw new Error('Expected otherFailure to fail.');
      })
      .catch(() => {});
  });

  it('assertFails() if message contains unauthorized', async function () {
    const success = Promise.resolve('success');
    const permissionDenied = Promise.reject({
      message: 'User does not have permission to access \'file\'. (storage/unauthorized)'
    });
    const otherFailure = Promise.reject('failure');
    await firebase
      .assertFails(success)
      .then(() => {
        throw new Error('Expected success to fail.');
      })
      .catch(() => {});

    await firebase.assertFails(permissionDenied).catch(() => {
      throw new Error('Expected permissionDenied to succeed.');
    });

    await firebase
      .assertFails(otherFailure)
      .then(() => {
        throw new Error('Expected otherFailure to fail.');
      })
      .catch(() => {});
  });

  it('discoverEmulators() finds all running emulators', async () => {
    const options = await firebase.discoverEmulators();

    expect(options).to.deep.equal({
      database: {
        host: 'localhost',
        port: 9002
      },
      firestore: {
        host: 'localhost',
        port: 9003
      },
      storage: {
        host: 'localhost',
        port: 9199
      },
      hub: {
        host: 'localhost',
        port: 4400
      }
    });
  });

  it('initializeTestApp() with auth=null does not set access token', async function () {
    const app = firebase.initializeTestApp({
      projectId: 'foo',
      auth: undefined
    });

    const authInternal = ((app as unknown) as _FirebaseApp).container
      .getProvider('auth-internal')
      .getImmediate({ optional: true });
    // Auth instance will not be available because no API Key is provided
    expect(authInternal).to.be.null;
  });

  it('initializeTestApp() with auth sets the correct access token', async function () {
    const auth = { uid: 'alice' };
    const app = firebase.initializeTestApp({
      projectId: 'foo',
      auth: auth
    });
    const authInternal = ((app as unknown) as _FirebaseApp).container
      .getProvider('auth-internal')
      .getImmediate();

    const token = await authInternal.getToken();
    expect(token).to.have.keys('accessToken');
    const claims = JSON.parse(
      base64.decodeString(token!.accessToken.split('.')[1], /*webSafe=*/ false)
    );
    // We add an 'iat' field.
    expect(claims).to.deep.equal({
      iss: 'https://securetoken.google.com/foo',
      aud: 'foo',
      iat: 0,
      exp: 3600,
      auth_time: 0,
      sub: 'alice',
      user_id: 'alice',
      firebase: {
        sign_in_provider: 'custom',
        identities: {}
      }
    });
  });

  it('initializeAdminApp() has admin access to RTDB', async function () {
    await firebase.loadDatabaseRules({
      databaseName: 'foo',
      rules: '{ "rules": {".read": false, ".write": false} }'
    });

    const app = firebase.initializeAdminApp({
      projectId: 'foo',
      databaseName: 'foo',
      storageBucket: 'foo'
    });

    await firebase.assertSucceeds(
      app.database().ref().child('/foo/bar').set({ hello: 'world' })
    );
  });

  it('initializeAdminApp() has admin access to Firestore', async function () {
    await firebase.loadFirestoreRules({
      projectId: 'foo',
      rules: `service cloud.firestore {
        match /databases/{db}/documents/{doc=**} {
          allow read, write: if false;
        }
      }`
    });

    const app = firebase.initializeAdminApp({
      projectId: 'foo',
      databaseName: 'foo',
      storageBucket: 'foo'
    });

    await firebase.assertSucceeds(
      app.firestore().doc('/foo/bar').set({ hello: 'world' })
    );
  });

  it('initializeAdminApp() has admin access to storage', async function () {
    await firebase.loadStorageRules({
      rules: `rules_version = '2';
      service firebase.storage {
        match /b/{bucket}/o {
          match /{allPaths=**} {
            allow read, write: if false;
          }
        }
      }`
    });

    const app = firebase.initializeAdminApp({
      projectId: 'foo',
      databaseName: 'foo',
      storageBucket: 'foo'
    });

    // TODO: This test cannot be enabled without adding credentials to the test environment
    //       due to an underlying issue with firebase-admin storage. For now we will run it
    //       locally but not in CI.
    if (process.env.CI !== 'true') {
      await firebase.assertSucceeds(
        app.storage().bucket().file('/foo/bar.txt').save('Hello, World!')
      );
    }
  });

  it('initializeAdminApp() and initializeTestApp() work together', async function () {
    await firebase.loadDatabaseRules({
      databaseName: 'foo',
      rules: JSON.stringify({
        'rules': {
          'public': { '.read': true, '.write': true },
          'private': { '.read': false, '.write': false }
        }
      })
    });

    const adminApp = firebase.initializeAdminApp({
      projectId: 'foo',
      databaseName: 'foo',
      storageBucket: 'foo'
    });

    const testApp = firebase.initializeTestApp({
      projectId: 'foo',
      databaseName: 'foo',
      storageBucket: 'foo'
    });

    // Admin app can write anywhere
    await firebase.assertSucceeds(
      adminApp.database().ref().child('/public/doc').set({ hello: 'admin' })
    );
    await firebase.assertSucceeds(
      adminApp.database().ref().child('/private/doc').set({ hello: 'admin' })
    );

    // Test app can only write to public, not to private
    await firebase.assertSucceeds(
      testApp.database().ref().child('/public/doc').set({ hello: 'test' })
    );
    await firebase.assertFails(
      testApp.database().ref().child('/private/doc').set({ hello: 'test' })
    );
  });

  it('initializeAdminApp() works with custom claims', async function () {
    await firebase.loadFirestoreRules({
      projectId: 'foo',
      rules: `service cloud.firestore {
        match /databases/{db}/documents/{doc=**} {
          allow read, write: if request.auth.token.custom_claim == 'foo';
        }
      }`
    });

    const noClaim = firebase.initializeTestApp({
      projectId: 'foo',
      auth: {
        uid: 'noClaim'
      }
    });

    const hasClaim = firebase.initializeTestApp({
      projectId: 'foo',
      auth: {
        uid: 'hasClaim',
        custom_claim: 'foo'
      }
    });

    const wrongClaim = firebase.initializeTestApp({
      projectId: 'foo',
      auth: {
        uid: 'wrongClaim',
        custom_claim: 'bar'
      }
    });

    await firebase.assertSucceeds(
      hasClaim.firestore().doc('test/test').set({ hello: 'test' })
    );
    await firebase.assertFails(
      noClaim.firestore().doc('test/test').set({ hello: 'test' })
    );
    await firebase.assertFails(
      wrongClaim.firestore().doc('test/test').set({ hello: 'test' })
    );
  });

  it('initializeTestApp() does not destroy user input', function () {
    const options = {
      projectId: 'fakeproject',
      auth: {
        uid: 'sam',
        email: 'sam@sam.com'
      }
    };
    const optionsCopy = Object.assign({}, options);

    firebase.initializeTestApp(options);
    expect(options).to.deep.equal(optionsCopy);
  });

  it('loadDatabaseRules() throws if no databaseName or rules', async function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await expect(
      firebase.loadDatabaseRules({} as any)
    ).to.eventually.be.rejectedWith(/databaseName not specified/);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await expect(
      firebase.loadDatabaseRules({
        databaseName: 'foo'
      } as any)
    ).to.eventually.be.rejectedWith(/must provide rules/);
    await expect(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      firebase.loadDatabaseRules({ rules: '{}' } as any)
    ).to.eventually.be.rejectedWith(/databaseName not specified/);
  });

  it('loadDatabaseRules() succeeds on valid input', async function () {
    await firebase.loadDatabaseRules({
      databaseName: 'foo',
      rules: '{ "rules": {} }'
    });
  });

  it('loadFirestoreRules() succeeds on valid input', async function () {
    await firebase.loadFirestoreRules({
      projectId: 'foo',
      rules: `service cloud.firestore {
        match /databases/{db}/documents/{doc=**} {
          allow read, write;
        }
      }`
    });
  });

  it('loadStorageRules() succeeds on valid input', async function () {
    await firebase.loadStorageRules({
      rules: `rules_version = '2';
      service firebase.storage {
        match /b/{bucket}/o {
          match /{allPaths=**} {
            allow read, write: if false;
          }
        }
      }`
    });
  });

  it('loadStorageRules() fails on invalid input', async function () {
    const p = firebase.loadStorageRules({
      rules: `rules_version = '2';
      service firebase.storage {
        banana
      }`
    });

    await expect(p).to.eventually.be.rejected;
  });

  it('clearFirestoreData() succeeds on valid input', async function () {
    await firebase.clearFirestoreData({
      projectId: 'foo'
    });
  });

  it('apps() returns apps created with initializeTestApp', async function () {
    const numApps = firebase.apps().length;
    await firebase.initializeTestApp({ databaseName: 'foo', auth: undefined });
    expect(firebase.apps().length).to.equal(numApps + 1);
    await firebase.initializeTestApp({ databaseName: 'bar', auth: undefined });
    expect(firebase.apps().length).to.equal(numApps + 2);
  });

  it('there is a way to get database timestamps', function () {
    expect(firebase.database.ServerValue.TIMESTAMP).to.deep.equal({
      '.sv': 'timestamp'
    });
  });

  it('there is a way to get firestore timestamps', function () {
    expect(firebase.firestore.FieldValue.serverTimestamp()).not.to.be.null;
  });

  it('disabling function triggers does not throw, returns value', async function () {
    const putSpy = sandbox.spy(request, 'put');

    const res = await firebase.withFunctionTriggersDisabled(() => {
      return Promise.resolve(1234);
    });

    expect(res).to.eq(1234);
    expect(putSpy.callCount).to.equal(2);
  });

  it('disabling function triggers always re-enables, event when the function throws', async function () {
    const putSpy = sandbox.spy(request, 'put');

    const res = firebase.withFunctionTriggersDisabled(() => {
      throw new Error('I throw!');
    });

    await expect(res).to.eventually.be.rejectedWith('I throw!');
    expect(putSpy.callCount).to.equal(2);
  });
});
