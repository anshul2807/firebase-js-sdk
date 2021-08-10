<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [verifyPasswordResetCode](./auth.verifypasswordresetcode.md)

## verifyPasswordResetCode() function

Checks a password reset code sent to the user by email or other out-of-band mechanism.

<b>Signature:</b>

```typescript
export declare function verifyPasswordResetCode(auth: Auth, code: string): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  auth | [Auth](./auth.auth.md) | The Auth instance. |
|  code | string | A verification code sent to the user. |

<b>Returns:</b>

Promise&lt;string&gt;

the user's email address if valid.
