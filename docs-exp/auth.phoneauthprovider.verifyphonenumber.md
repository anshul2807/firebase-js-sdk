<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [PhoneAuthProvider](./auth.phoneauthprovider.md) &gt; [verifyPhoneNumber](./auth.phoneauthprovider.verifyphonenumber.md)

## PhoneAuthProvider.verifyPhoneNumber() method

Starts a phone number authentication flow by sending a verification code to the given phone number.

<b>Signature:</b>

```typescript
verifyPhoneNumber(phoneOptions: PhoneInfoOptions | string, applicationVerifier: ApplicationVerifier): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  phoneOptions | [PhoneInfoOptions](./auth.phoneinfooptions.md) \| string |  |
|  applicationVerifier | [ApplicationVerifier](./auth.applicationverifier.md) | For abuse prevention, this method also requires a [ApplicationVerifier](./auth.applicationverifier.md)<!-- -->. This SDK includes a reCAPTCHA-based implementation, [RecaptchaVerifier](./auth.recaptchaverifier.md)<!-- -->. |

<b>Returns:</b>

Promise&lt;string&gt;

A Promise for a verification ID that can be passed to [PhoneAuthProvider.credential()](./auth.phoneauthprovider.credential.md) to identify this flow..

## Example 1


```javascript
const provider = new PhoneAuthProvider(auth);
const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
// Obtain verificationCode from the user.
const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
const userCredential = await signInWithCredential(auth, authCredential);

```

## Example 2

An alternative flow is provided using the `signInWithPhoneNumber` method.

```javascript
const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
// Obtain verificationCode from the user.
const userCredential = confirmationResult.confirm(verificationCode);

```
