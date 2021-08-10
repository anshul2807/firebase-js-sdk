<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [/](./firestore_.md) &gt; [Transaction](./firestore_.transaction.md)

## Transaction class

A reference to a transaction.

The `Transaction` object passed to a transaction's `updateFunction` provides the methods to read and write data within the transaction context. See [runTransaction()](./firestore_.runtransaction.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare class Transaction 
```

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [delete(documentRef)](./firestore_.transaction.delete.md) |  | Deletes the document referred to by the provided [DocumentReference](./firestore_.documentreference.md)<!-- -->. |
|  [get(documentRef)](./firestore_.transaction.get.md) |  | Reads the document referenced by the provided [DocumentReference](./firestore_.documentreference.md)<!-- -->. |
|  [set(documentRef, data)](./firestore_.transaction.set.md) |  | Writes to the document referred to by the provided [DocumentReference](./firestore_.documentreference.md)<!-- -->. If the document does not exist yet, it will be created. |
|  [set(documentRef, data, options)](./firestore_.transaction.set_1.md) |  | Writes to the document referred to by the provided [DocumentReference](./firestore_.documentreference.md)<!-- -->. If the document does not exist yet, it will be created. If you provide <code>merge</code> or <code>mergeFields</code>, the provided data can be merged into an existing document. |
|  [update(documentRef, data)](./firestore_.transaction.update.md) |  | Updates fields in the document referred to by the provided [DocumentReference](./firestore_.documentreference.md)<!-- -->. The update will fail if applied to a document that does not exist. |
|  [update(documentRef, field, value, moreFieldsAndValues)](./firestore_.transaction.update_1.md) |  | Updates fields in the document referred to by the provided [DocumentReference](./firestore_.documentreference.md)<!-- -->. The update will fail if applied to a document that does not exist.<!-- -->Nested fields can be updated by providing dot-separated field path strings or by providing <code>FieldPath</code> objects. |
