<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [lite](./firestore_lite.md) &gt; [Settings](./firestore_lite.settings.md)

## Settings interface

Specifies custom configurations for your Cloud Firestore instance. You must set these before invoking any other methods.

<b>Signature:</b>

```typescript
export declare interface Settings 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [host?](./firestore_lite.settings.host.md) | string | <i>(Optional)</i> The hostname to connect to. |
|  [ignoreUndefinedProperties?](./firestore_lite.settings.ignoreundefinedproperties.md) | boolean | <i>(Optional)</i> Whether to skip nested properties that are set to <code>undefined</code> during object serialization. If set to <code>true</code>, these properties are skipped and not written to Firestore. If set to <code>false</code> or omitted, the SDK throws an exception when it encounters properties of type <code>undefined</code>. |
|  [ssl?](./firestore_lite.settings.ssl.md) | boolean | <i>(Optional)</i> Whether to use SSL when connecting. |
