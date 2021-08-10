<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [OAuthProvider](./auth.oauthprovider.md) &gt; [credentialFromResult](./auth.oauthprovider.credentialfromresult.md)

## OAuthProvider.credentialFromResult() method

Used to extract the underlying [OAuthCredential](./auth.oauthcredential.md) from a [UserCredential](./auth.usercredential.md)<!-- -->.

<b>Signature:</b>

```typescript
static credentialFromResult(userCredential: UserCredential): OAuthCredential | null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  userCredential | [UserCredential](./auth.usercredential.md) | The user credential. |

<b>Returns:</b>

[OAuthCredential](./auth.oauthcredential.md) \| null
