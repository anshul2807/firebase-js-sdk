<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/database](./database.md)

## database package

Firebase Realtime Database

## Classes

|  Class | Description |
|  --- | --- |
|  [DataSnapshot](./database.datasnapshot.md) | A <code>DataSnapshot</code> contains data from a Database location.<!-- -->Any time you read data from the Database, you receive the data as a <code>DataSnapshot</code>. A <code>DataSnapshot</code> is passed to the event callbacks you attach with <code>on()</code> or <code>once()</code>. You can extract the contents of the snapshot as a JavaScript object by calling the <code>val()</code> method. Alternatively, you can traverse into the snapshot by calling <code>child()</code> to return child snapshots (which you could then call <code>val()</code> on).<!-- -->A <code>DataSnapshot</code> is an efficiently generated, immutable copy of the data at a Database location. It cannot be modified and will never change (to modify data, you always call the <code>set()</code> method on a <code>Reference</code> directly). |
|  [FirebaseDatabase](./database.firebasedatabase.md) | Class representing a Firebase Realtime Database. |
|  [OnDisconnect](./database.ondisconnect.md) | The <code>onDisconnect</code> class allows you to write or clear data when your client disconnects from the Database server. These updates occur whether your client disconnects cleanly or not, so you can rely on them to clean up data even if a connection is dropped or a client crashes.<!-- -->The <code>onDisconnect</code> class is most commonly used to manage presence in applications where it is useful to detect how many clients are connected and when other clients disconnect. See [Enabling Offline Capabilities in JavaScript](https://firebase.google.com/docs/database/web/offline-capabilities) for more information.<!-- -->To avoid problems when a connection is dropped before the requests can be transferred to the Database server, these functions should be called before writing any data.<!-- -->Note that <code>onDisconnect</code> operations are only triggered once. If you want an operation to occur each time a disconnect occurs, you'll need to re-establish the <code>onDisconnect</code> operations each time you reconnect. |
|  [QueryConstraint](./database.queryconstraint.md) | A <code>QueryConstraint</code> is used to narrow the set of documents returned by a Database query. <code>QueryConstraint</code>s are created by invoking [endAt()](./database.endat.md)<!-- -->, [endBefore()](./database.endbefore.md)<!-- -->, [startAt()](./database.startat.md)<!-- -->, [startAfter()](./database.startafter.md)<!-- -->, [limitToFirst()](./database.limittofirst.md)<!-- -->, [limitToLast()](./database.limittolast.md)<!-- -->, [orderByChild()](./database.orderbychild.md)<!-- -->, [orderByChild()](./database.orderbychild.md)<!-- -->, [orderByKey()](./database.orderbykey.md) , [orderByPriority()](./database.orderbypriority.md) , [orderByValue()](./database.orderbyvalue.md) or [equalTo()](./database.equalto.md) and can then be passed to [query()](./database.query.md) to create a new query instance that also contains this <code>QueryConstraint</code>. |
|  [TransactionResult](./database.transactionresult.md) | A type for the resolve value of Firebase.transaction. |

## Functions

|  Function | Description |
|  --- | --- |
|  [child(parent, path)](./database.child.md) |  |
|  [enableLogging(enabled, persistent)](./database.enablelogging.md) | Logs debugging information to the console. |
|  [enableLogging(logger)](./database.enablelogging_1.md) | Logs debugging information to the console. |
|  [endAt(value, key)](./database.endat.md) | Creates a <code>QueryConstraint</code> with the specified ending point.<!-- -->Using <code>startAt()</code>, <code>startAfter()</code>, <code>endBefore()</code>, <code>endAt()</code> and <code>equalTo()</code> allows you to choose arbitrary starting and ending points for your queries.<!-- -->The ending point is inclusive, so children with exactly the specified value will be included in the query. The optional key argument can be used to further limit the range of the query. If it is specified, then children that have exactly the specified value must also have a key name less than or equal to the specified key.<!-- -->You can read more about <code>endAt()</code> in [Filtering data](https://firebase.google.com/docs/database/web/lists-of-data#filtering_data)<!-- -->. |
|  [endBefore(value, key)](./database.endbefore.md) | Creates a <code>QueryConstraint</code> with the specified ending point (exclusive).<!-- -->Using <code>startAt()</code>, <code>startAfter()</code>, <code>endBefore()</code>, <code>endAt()</code> and <code>equalTo()</code> allows you to choose arbitrary starting and ending points for your queries.<!-- -->The ending point is exclusive. If only a value is provided, children with a value less than the specified value will be included in the query. If a key is specified, then children must have a value lesss than or equal to the specified value and a a key name less than the specified key. |
|  [equalTo(value, key)](./database.equalto.md) | Creates a <code>QueryConstraint</code> that includes children that match the specified value.<!-- -->Using <code>startAt()</code>, <code>startAfter()</code>, <code>endBefore()</code>, <code>endAt()</code> and <code>equalTo()</code> allows you to choose arbitrary starting and ending points for your queries.<!-- -->The optional key argument can be used to further limit the range of the query. If it is specified, then children that have exactly the specified value must also have exactly the specified key as their key name. This can be used to filter result sets with many matches for the same value.<!-- -->You can read more about <code>equalTo()</code> in [Filtering data](https://firebase.google.com/docs/database/web/lists-of-data#filtering_data)<!-- -->. |
|  [get(query)](./database.get.md) | Gets the most up-to-date result for this query. |
|  [getDatabase(app, url)](./database.getdatabase.md) | Returns the instance of the Realtime Database SDK that is associated with the provided [FirebaseApp](./app.firebaseapp.md)<!-- -->. Initializes a new instance with with default settings if no instance exists or if the existing instance uses a custom database URL. |
|  [goOffline(db)](./database.gooffline.md) | Disconnects from the server (all Database operations will be completed offline).<!-- -->The client automatically maintains a persistent connection to the Database server, which will remain active indefinitely and reconnect when disconnected. However, the <code>goOffline()</code> and <code>goOnline()</code> methods may be used to control the client connection in cases where a persistent connection is undesirable.<!-- -->While offline, the client will no longer receive data updates from the Database. However, all Database operations performed locally will continue to immediately fire events, allowing your application to continue behaving normally. Additionally, each operation performed locally will automatically be queued and retried upon reconnection to the Database server.<!-- -->To reconnect to the Database and begin receiving remote events, see <code>goOnline()</code>. |
|  [goOnline(db)](./database.goonline.md) | Reconnects to the server and synchronizes the offline Database state with the server state.<!-- -->This method should be used after disabling the active connection with <code>goOffline()</code>. Once reconnected, the client will transmit the proper data and fire the appropriate events so that your client "catches up" automatically. |
|  [increment(delta)](./database.increment.md) | Returns a placeholder value that can be used to atomically increment the current database value by the provided delta. |
|  [limitToFirst(limit)](./database.limittofirst.md) | Creates a new <code>QueryConstraint</code> that if limited to the first specific number of children.<!-- -->The <code>limitToFirst()</code> method is used to set a maximum number of children to be synced for a given callback. If we set a limit of 100, we will initially only receive up to 100 <code>child_added</code> events. If we have fewer than 100 messages stored in our Database, a <code>child_added</code> event will fire for each message. However, if we have over 100 messages, we will only receive a <code>child_added</code> event for the first 100 ordered messages. As items change, we will receive <code>child_removed</code> events for each item that drops out of the active list so that the total number stays at 100.<!-- -->You can read more about <code>limitToFirst()</code> in [Filtering data](https://firebase.google.com/docs/database/web/lists-of-data#filtering_data)<!-- -->. |
|  [limitToLast(limit)](./database.limittolast.md) | Creates a new <code>QueryConstraint</code> that is limited to return only the last specified number of children.<!-- -->The <code>limitToLast()</code> method is used to set a maximum number of children to be synced for a given callback. If we set a limit of 100, we will initially only receive up to 100 <code>child_added</code> events. If we have fewer than 100 messages stored in our Database, a <code>child_added</code> event will fire for each message. However, if we have over 100 messages, we will only receive a <code>child_added</code> event for the last 100 ordered messages. As items change, we will receive <code>child_removed</code> events for each item that drops out of the active list so that the total number stays at 100.<!-- -->You can read more about <code>limitToLast()</code> in [Filtering data](https://firebase.google.com/docs/database/web/lists-of-data#filtering_data)<!-- -->. |
|  [off(query, eventType, callback)](./database.off.md) | Detaches a callback previously attached with <code>on()</code>.<!-- -->Detach a callback previously attached with <code>on()</code>. Note that if <code>on()</code> was called multiple times with the same eventType and callback, the callback will be called multiple times for each event, and <code>off()</code> must be called multiple times to remove the callback. Calling <code>off()</code> on a parent listener will not automatically remove listeners registered on child nodes, <code>off()</code> must also be called on any child listeners to remove the callback.<!-- -->If a callback is not specified, all callbacks for the specified eventType will be removed. Similarly, if no eventType is specified, all callbacks for the <code>Reference</code> will be removed.<!-- -->Individual listeners can also be removed by invoking their unsubscribe callbacks. |
|  [onChildAdded(query, callback, cancelCallback)](./database.onchildadded.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildAdded</code> event will be triggered once for each initial child at this location, and it will be triggered again every time a new child is added. The <code>DataSnapshot</code> passed into the callback will reflect the data for the relevant child. For ordering purposes, it is passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildAdded(query, callback, options)](./database.onchildadded_1.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildAdded</code> event will be triggered once for each initial child at this location, and it will be triggered again every time a new child is added. The <code>DataSnapshot</code> passed into the callback will reflect the data for the relevant child. For ordering purposes, it is passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildAdded(query, callback, cancelCallback, options)](./database.onchildadded_2.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildAdded</code> event will be triggered once for each initial child at this location, and it will be triggered again every time a new child is added. The <code>DataSnapshot</code> passed into the callback will reflect the data for the relevant child. For ordering purposes, it is passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildChanged(query, callback, cancelCallback)](./database.onchildchanged.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildChanged</code> event will be triggered when the data stored in a child (or any of its descendants) changes. Note that a single <code>child_changed</code> event may represent multiple changes to the child. The <code>DataSnapshot</code> passed to the callback will contain the new child contents. For ordering purposes, the callback is also passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildChanged(query, callback, options)](./database.onchildchanged_1.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildChanged</code> event will be triggered when the data stored in a child (or any of its descendants) changes. Note that a single <code>child_changed</code> event may represent multiple changes to the child. The <code>DataSnapshot</code> passed to the callback will contain the new child contents. For ordering purposes, the callback is also passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildChanged(query, callback, cancelCallback, options)](./database.onchildchanged_2.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildChanged</code> event will be triggered when the data stored in a child (or any of its descendants) changes. Note that a single <code>child_changed</code> event may represent multiple changes to the child. The <code>DataSnapshot</code> passed to the callback will contain the new child contents. For ordering purposes, the callback is also passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildMoved(query, callback, cancelCallback)](./database.onchildmoved.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildMoved</code> event will be triggered when a child's sort order changes such that its position relative to its siblings changes. The <code>DataSnapshot</code> passed to the callback will be for the data of the child that has moved. It is also passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildMoved(query, callback, options)](./database.onchildmoved_1.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildMoved</code> event will be triggered when a child's sort order changes such that its position relative to its siblings changes. The <code>DataSnapshot</code> passed to the callback will be for the data of the child that has moved. It is also passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildMoved(query, callback, cancelCallback, options)](./database.onchildmoved_2.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildMoved</code> event will be triggered when a child's sort order changes such that its position relative to its siblings changes. The <code>DataSnapshot</code> passed to the callback will be for the data of the child that has moved. It is also passed a second argument which is a string containing the key of the previous sibling child by sort order, or <code>null</code> if it is the first child. |
|  [onChildRemoved(query, callback, cancelCallback)](./database.onchildremoved.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildRemoved</code> event will be triggered once every time a child is removed. The <code>DataSnapshot</code> passed into the callback will be the old data for the child that was removed. A child will get removed when either:<!-- -->- a client explicitly calls <code>remove()</code> on that child or one of its ancestors - a client calls <code>set(null)</code> on that child or one of its ancestors - that child has all of its children removed - there is a query in effect which now filters out the child (because it's sort order changed or the max limit was hit) |
|  [onChildRemoved(query, callback, options)](./database.onchildremoved_1.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildRemoved</code> event will be triggered once every time a child is removed. The <code>DataSnapshot</code> passed into the callback will be the old data for the child that was removed. A child will get removed when either:<!-- -->- a client explicitly calls <code>remove()</code> on that child or one of its ancestors - a client calls <code>set(null)</code> on that child or one of its ancestors - that child has all of its children removed - there is a query in effect which now filters out the child (because it's sort order changed or the max limit was hit) |
|  [onChildRemoved(query, callback, cancelCallback, options)](./database.onchildremoved_2.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onChildRemoved</code> event will be triggered once every time a child is removed. The <code>DataSnapshot</code> passed into the callback will be the old data for the child that was removed. A child will get removed when either:<!-- -->- a client explicitly calls <code>remove()</code> on that child or one of its ancestors - a client calls <code>set(null)</code> on that child or one of its ancestors - that child has all of its children removed - there is a query in effect which now filters out the child (because it's sort order changed or the max limit was hit) |
|  [onDisconnect(ref)](./database.ondisconnect.md) | Returns an <code>OnDisconnect</code> object - see [Enabling Offline Capabilities in JavaScript](https://firebase.google.com/docs/database/web/offline-capabilities) for more information on how to use it. |
|  [onValue(query, callback, cancelCallback)](./database.onvalue.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onValue</code> event will trigger once with the initial data stored at this location, and then trigger again each time the data changes. The <code>DataSnapshot</code> passed to the callback will be for the location at which <code>on()</code> was called. It won't trigger until the entire contents has been synchronized. If the location has no data, it will be triggered with an empty <code>DataSnapshot</code> (<code>val()</code> will return <code>null</code>). |
|  [onValue(query, callback, options)](./database.onvalue_1.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onValue</code> event will trigger once with the initial data stored at this location, and then trigger again each time the data changes. The <code>DataSnapshot</code> passed to the callback will be for the location at which <code>on()</code> was called. It won't trigger until the entire contents has been synchronized. If the location has no data, it will be triggered with an empty <code>DataSnapshot</code> (<code>val()</code> will return <code>null</code>). |
|  [onValue(query, callback, cancelCallback, options)](./database.onvalue_2.md) | Listens for data changes at a particular location.<!-- -->This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Invoke the returned unsubscribe callback to stop receiving updates. See [Retrieve Data on the Web](https://firebase.google.com/docs/database/web/retrieve-data) for more details.<!-- -->An <code>onValue</code> event will trigger once with the initial data stored at this location, and then trigger again each time the data changes. The <code>DataSnapshot</code> passed to the callback will be for the location at which <code>on()</code> was called. It won't trigger until the entire contents has been synchronized. If the location has no data, it will be triggered with an empty <code>DataSnapshot</code> (<code>val()</code> will return <code>null</code>). |
|  [orderByChild(path)](./database.orderbychild.md) | Creates a new <code>QueryConstraint</code> that orders by the specified child key.<!-- -->Queries can only order by one key at a time. Calling <code>orderByChild()</code> multiple times on the same query is an error.<!-- -->Firebase queries allow you to order your data by any child key on the fly. However, if you know in advance what your indexes will be, you can define them via the .indexOn rule in your Security Rules for better performance. See the[https://firebase.google.com/docs/database/security/indexing-data](https://firebase.google.com/docs/database/security/indexing-data) rule for more information.<!-- -->You can read more about <code>orderByChild()</code> in [Sort data](https://firebase.google.com/docs/database/web/lists-of-data#sort_data)<!-- -->. |
|  [orderByKey()](./database.orderbykey.md) | Creates a new <code>QueryConstraint</code> that orders by the key.<!-- -->Sorts the results of a query by their (ascending) key values.<!-- -->You can read more about <code>orderByKey()</code> in [Sort data](https://firebase.google.com/docs/database/web/lists-of-data#sort_data)<!-- -->. |
|  [orderByPriority()](./database.orderbypriority.md) | Creates a new <code>QueryConstraint</code> that orders by priority.<!-- -->Applications need not use priority but can order collections by ordinary properties (see [Sort data](https://firebase.google.com/docs/database/web/lists-of-data#sort_data) for alternatives to priority. |
|  [orderByValue()](./database.orderbyvalue.md) | Creates a new <code>QueryConstraint</code> that orders by value.<!-- -->If the children of a query are all scalar values (string, number, or boolean), you can order the results by their (ascending) values.<!-- -->You can read more about <code>orderByValue()</code> in [Sort data](https://firebase.google.com/docs/database/web/lists-of-data#sort_data)<!-- -->. |
|  [push(parent, value)](./database.push.md) | Generates a new child location using a unique key and returns its <code>Reference</code>.<!-- -->This is the most common pattern for adding data to a collection of items.<!-- -->If you provide a value to <code>push()</code>, the value is written to the generated location. If you don't pass a value, nothing is written to the database and the child remains empty (but you can use the <code>Reference</code> elsewhere).<!-- -->The unique keys generated by <code>push()</code> are ordered by the current time, so the resulting list of items is chronologically sorted. The keys are also designed to be unguessable (they contain 72 random bits of entropy).<!-- -->See [Append to a list of data](https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data) </br>See [The 2^120 Ways to Ensure Unique Identifiers](ttps://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html) |
|  [query(query, queryConstraints)](./database.query.md) | Creates a new immutable instance of <code>Query</code> that is extended to also include additional query constraints. |
|  [ref(db, path)](./database.ref.md) | Returns a <code>Reference</code> representing the location in the Database corresponding to the provided path. If no path is provided, the <code>Reference</code> will point to the root of the Database. |
|  [refFromURL(db, url)](./database.reffromurl.md) | Returns a <code>Reference</code> representing the location in the Database corresponding to the provided Firebase URL.<!-- -->An exception is thrown if the URL is not a valid Firebase Database URL or it has a different domain than the current <code>Database</code> instance.<!-- -->Note that all query parameters (<code>orderBy</code>, <code>limitToLast</code>, etc.) are ignored and are not applied to the returned <code>Reference</code>. |
|  [remove(ref)](./database.remove.md) | Removes the data at this Database location.<!-- -->Any data at child locations will also be deleted.<!-- -->The effect of the remove will be visible immediately and the corresponding event 'value' will be triggered. Synchronization of the remove to the Firebase servers will also be started, and the returned Promise will resolve when complete. If provided, the onComplete callback will be called asynchronously after synchronization has finished. |
|  [runTransaction(ref, transactionUpdate, options)](./database.runtransaction.md) | Atomically modifies the data at this location.<!-- -->Atomically modify the data at this location. Unlike a normal <code>set()</code>, which just overwrites the data regardless of its previous value, <code>transaction()</code> is used to modify the existing value to a new value, ensuring there are no conflicts with other clients writing to the same location at the same time.<!-- -->To accomplish this, you pass <code>runTransaction()</code> an update function which is used to transform the current value into a new value. If another client writes to the location before your new value is successfully written, your update function will be called again with the new current value, and the write will be retried. This will happen repeatedly until your write succeeds without conflict or you abort the transaction by not returning a value from your update function.<!-- -->Note: Modifying data with <code>set()</code> will cancel any pending transactions at that location, so extreme care should be taken if mixing <code>set()</code> and <code>transaction()</code> to update the same data.<!-- -->Note: When using transactions with Security and Firebase Rules in place, be aware that a client needs <code>.read</code> access in addition to <code>.write</code> access in order to perform a transaction. This is because the client-side nature of transactions requires the client to read the data in order to transactionally update it. |
|  [serverTimestamp()](./database.servertimestamp.md) | Returns a placeholder value for auto-populating the current timestamp (time since the Unix epoch, in milliseconds) as determined by the Firebase servers. |
|  [set(ref, value)](./database.set.md) | Writes data to this Database location.<!-- -->This will overwrite any data at this location and all child locations.<!-- -->The effect of the write will be visible immediately, and the corresponding events ("value", "child\_added", etc.) will be triggered. Synchronization of the data to the Firebase servers will also be started, and the returned Promise will resolve when complete. If provided, the <code>onComplete</code> callback will be called asynchronously after synchronization has finished.<!-- -->Passing <code>null</code> for the new value is equivalent to calling <code>remove()</code>; namely, all data at this location and all child locations will be deleted.<code>set()</code> will remove any priority stored at this location, so if priority is meant to be preserved, you need to use <code>setWithPriority()</code> instead.<!-- -->Note that modifying data with <code>set()</code> will cancel any pending transactions at that location, so extreme care should be taken if mixing <code>set()</code> and <code>transaction()</code> to modify the same data.<!-- -->A single <code>set()</code> will generate a single "value" event at the location where the <code>set()</code> was performed. |
|  [setPriority(ref, priority)](./database.setpriority.md) | Sets a priority for the data at this Database location.<!-- -->Applications need not use priority but can order collections by ordinary properties (see [Sorting and filtering data](https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data) ). |
|  [setWithPriority(ref, value, priority)](./database.setwithpriority.md) | Writes data the Database location. Like <code>set()</code> but also specifies the priority for that data.<!-- -->Applications need not use priority but can order collections by ordinary properties (see [Sorting and filtering data](https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data) ). |
|  [startAfter(value, key)](./database.startafter.md) | Creates a <code>QueryConstraint</code> with the specified starting point (exclusive).<!-- -->Using <code>startAt()</code>, <code>startAfter()</code>, <code>endBefore()</code>, <code>endAt()</code> and <code>equalTo()</code> allows you to choose arbitrary starting and ending points for your queries.<!-- -->The starting point is exclusive. If only a value is provided, children with a value greater than the specified value will be included in the query. If a key is specified, then children must have a value greater than or equal to the specified value and a a key name greater than the specified key. |
|  [startAt(value, key)](./database.startat.md) | Creates a <code>QueryConstraint</code> with the specified starting point.<!-- -->Using <code>startAt()</code>, <code>startAfter()</code>, <code>endBefore()</code>, <code>endAt()</code> and <code>equalTo()</code> allows you to choose arbitrary starting and ending points for your queries.<!-- -->The starting point is inclusive, so children with exactly the specified value will be included in the query. The optional key argument can be used to further limit the range of the query. If it is specified, then children that have exactly the specified value must also have a key name greater than or equal to the specified key.<!-- -->You can read more about <code>startAt()</code> in [Filtering data](https://firebase.google.com/docs/database/web/lists-of-data#filtering_data)<!-- -->. |
|  [update(ref, values)](./database.update.md) | Writes multiple values to the Database at once.<!-- -->The <code>values</code> argument contains multiple property-value pairs that will be written to the Database together. Each child property can either be a simple property (for example, "name") or a relative path (for example, "name/first") from the current location to the data to update.<!-- -->As opposed to the <code>set()</code> method, <code>update()</code> can be use to selectively update only the referenced properties at the current location (instead of replacing all the child properties at the current location).<!-- -->The effect of the write will be visible immediately, and the corresponding events ('value', 'child\_added', etc.) will be triggered. Synchronization of the data to the Firebase servers will also be started, and the returned Promise will resolve when complete. If provided, the <code>onComplete</code> callback will be called asynchronously after synchronization has finished.<!-- -->A single <code>update()</code> will generate a single "value" event at the location where the <code>update()</code> was performed, regardless of how many children were modified.<!-- -->Note that modifying data with <code>update()</code> will cancel any pending transactions at that location, so extreme care should be taken if mixing <code>update()</code> and <code>transaction()</code> to modify the same data.<!-- -->Passing <code>null</code> to <code>update()</code> will remove the data at this location.<!-- -->See [Introducing multi-location updates and more](https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html)<!-- -->. |
|  [useDatabaseEmulator(db, host, port)](./database.usedatabaseemulator.md) | Modify the provided instance to communicate with the Realtime Database emulator.<p>Note: This method must be called before performing any other operation. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [ListenOptions](./database.listenoptions.md) | An options objects that can be used to customize a listener. |
|  [Query](./database.query.md) | A <code>Query</code> sorts and filters the data at a Database location so only a subset of the child data is included. This can be used to order a collection of data by some attribute (for example, height of dinosaurs) as well as to restrict a large list of items (for example, chat messages) down to a number suitable for synchronizing to the client. Queries are created by chaining together one or more of the filter methods defined here.<!-- -->Just as with a <code>Reference</code>, you can receive data from a <code>Query</code> by using the <code>on*()</code> methods. You will only receive events and <code>DataSnapshot</code>s for the subset of the data that matches your query.<!-- -->See [https://firebase.google.com/docs/database/web/lists-of-data\#sorting\_and\_filtering\_data](https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data) for more information. |
|  [Reference](./database.reference.md) | A <code>Reference</code> represents a specific location in your Database and can be used for reading or writing data to that Database location.<!-- -->You can reference the root or child location in your Database by calling <code>ref()</code> or <code>ref(&quot;child/path&quot;)</code>.<!-- -->Writing is done with the <code>set()</code> method and reading can be done with the <code>on*()</code> method. See [https://firebase.google.com/docs/database/web/read-and-write](https://firebase.google.com/docs/database/web/read-and-write) |
|  [ThenableReference](./database.thenablereference.md) | A <code>Promise</code> that can also act as a <code>Reference</code> when returned by [push()](./database.push.md)<!-- -->. The reference is available immediately and the Promise resolves as the write to the backend completes. |
|  [TransactionOptions](./database.transactionoptions.md) | An options object to configure transactions. |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [EventType](./database.eventtype.md) | One of the following strings: "value", "child\_added", "child\_changed", "child\_removed", or "child\_moved." |
|  [QueryConstraintType](./database.queryconstrainttype.md) | Describes the different query constraints available in this SDK. |
|  [Unsubscribe](./database.unsubscribe.md) | A callback that can invoked to remove a listener. |
