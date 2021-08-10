<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [GoogleAuthProvider](./auth.googleauthprovider.md)

## GoogleAuthProvider class

Provider for generating an an [OAuthCredential](./auth.oauthcredential.md) for [ProviderId.GOOGLE](./auth.providerid.google.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare class GoogleAuthProvider extends BaseOAuthProvider 
```
<b>Extends:</b> BaseOAuthProvider

## Example 1


```javascript
// Sign in using a redirect.
const provider = new GoogleAuthProvider();
// Start a sign in process for an unauthenticated user.
provider.addScope('profile');
provider.addScope('email');
await signInWithRedirect(auth, provider);
// This will trigger a full page redirect away from your app

// After returning from the redirect when your app initializes you can obtain the result
const result = await getRedirectResult(auth);
if (result) {
  // This is the signed-in user
  const user = result.user;
  // This gives you a Google Access Token.
  const credential = provider.credentialFromResult(auth, result);
  const token = credential.accessToken;
}

```

## Example 2


```javascript
// Sign in using a popup.
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
const result = await signInWithPopup(auth, provider);

// The signed-in user info.
const user = result.user;
// This gives you a Google Access Token.
const credential = provider.credentialFromResult(auth, result);
const token = credential.accessToken;

```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)()](./auth.googleauthprovider._constructor_.md) |  | Constructs a new instance of the <code>GoogleAuthProvider</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [GOOGLE\_SIGN\_IN\_METHOD](./auth.googleauthprovider.google_sign_in_method.md) | <code>static</code> | (not declared) | Always set to [SignInMethod.GOOGLE](./auth.signinmethod.google.md)<!-- -->. |
|  [PROVIDER\_ID](./auth.googleauthprovider.provider_id.md) | <code>static</code> | (not declared) | Always set to [ProviderId.GOOGLE](./auth.providerid.google.md)<!-- -->. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [credential(idToken, accessToken)](./auth.googleauthprovider.credential.md) | <code>static</code> | Creates a credential for Google. At least one of ID token and access token is required. |
|  [credentialFromError(error)](./auth.googleauthprovider.credentialfromerror.md) | <code>static</code> | Used to extract the underlying [OAuthCredential](./auth.oauthcredential.md) from a [AuthError](./auth.autherror.md) which was thrown during a sign-in, link, or reauthenticate operation. |
|  [credentialFromResult(userCredential)](./auth.googleauthprovider.credentialfromresult.md) | <code>static</code> | Used to extract the underlying [OAuthCredential](./auth.oauthcredential.md) from a [UserCredential](./auth.usercredential.md)<!-- -->. |
