<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth](./auth.md) &gt; [AuthCredential](./auth.authcredential.md)

## AuthCredential class

Interface that represents the credentials returned by an [AuthProvider](./auth.authprovider.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare class AuthCredential 
```

## Remarks

Implementations specify the details about each auth provider's credential requirements.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `AuthCredential` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [providerId](./auth.authcredential.providerid.md) |  | string | The authentication provider ID for the credential. |
|  [signInMethod](./auth.authcredential.signinmethod.md) |  | string | The authentication sign in method for the credential. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [toJSON()](./auth.authcredential.tojson.md) |  | Returns a JSON-serializable representation of this object. |
