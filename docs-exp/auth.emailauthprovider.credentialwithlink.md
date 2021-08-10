<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [EmailAuthProvider](./auth.emailauthprovider.md) &gt; [credentialWithLink](./auth.emailauthprovider.credentialwithlink.md)

## EmailAuthProvider.credentialWithLink() method

Initialize an [AuthCredential](./auth.authcredential.md) using an email and an email link after a sign in with email link operation.

<b>Signature:</b>

```typescript
static credentialWithLink(email: string, emailLink: string): EmailAuthCredential;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  email | string | Email address. |
|  emailLink | string | Sign-in email link. |

<b>Returns:</b>

[EmailAuthCredential](./auth.emailauthcredential.md)

- The auth provider credential.

## Example 1


```javascript
const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
const userCredential = await signInWithCredential(auth, authCredential);

```

## Example 2


```javascript
await sendSignInLinkToEmail(auth, email);
// Obtain emailLink from user.
const userCredential = await signInWithEmailLink(auth, email, emailLink);

```
