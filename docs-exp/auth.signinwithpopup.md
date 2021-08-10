<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [signInWithPopup](./auth.signinwithpopup.md)

## signInWithPopup() function

Authenticates a Firebase client using a popup-based OAuth authentication flow.

<b>Signature:</b>

```typescript
export declare function signInWithPopup(auth: Auth, provider: AuthProvider, resolver?: PopupRedirectResolver): Promise<UserCredential>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  auth | [Auth](./auth.auth.md) | The Auth instance. |
|  provider | [AuthProvider](./auth.authprovider.md) | The provider to authenticate. The provider has to be an [OAuthProvider](./auth.oauthprovider.md)<!-- -->. Non-OAuth providers like [EmailAuthProvider](./auth.emailauthprovider.md) will throw an error. |
|  resolver | [PopupRedirectResolver](./auth.popupredirectresolver.md) | An instance of [PopupRedirectResolver](./auth.popupredirectresolver.md)<!-- -->, optional if already supplied to [initializeAuth()](./auth.initializeauth.md) or provided by [getAuth()](./auth.getauth.md)<!-- -->. |

<b>Returns:</b>

Promise&lt;[UserCredential](./auth.usercredential.md)<!-- -->&gt;

## Remarks

If succeeds, returns the signed in user along with the provider's credential. If sign in was unsuccessful, returns an error object containing additional information about the error.

## Example


```javascript
// Sign in using a popup.
const provider = new FacebookAuthProvider();
const result = await signInWithPopup(auth, provider);

// The signed-in user info.
const user = result.user;
// This gives you a Facebook Access Token.
const credential = provider.credentialFromResult(auth, result);
const token = credential.accessToken;

```
