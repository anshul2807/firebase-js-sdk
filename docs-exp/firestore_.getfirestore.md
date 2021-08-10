<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [/](./firestore_.md) &gt; [getFirestore](./firestore_.getfirestore.md)

## getFirestore() function

Returns the existing instance of Firestore that is associated with the provided [FirebaseApp](./app.firebaseapp.md)<!-- -->. If no instance exists, initializes a new instance with default settings.

<b>Signature:</b>

```typescript
export declare function getFirestore(app?: FirebaseApp): FirebaseFirestore;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  app | [FirebaseApp](./app.firebaseapp.md) | The [FirebaseApp](./app.firebaseapp.md) instance that the returned Firestore instance is associated with. |

<b>Returns:</b>

[FirebaseFirestore](./firestore_.firebasefirestore.md)

The `Firestore` instance of the provided app.
