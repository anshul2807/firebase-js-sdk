<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/messaging](./messaging.md)

## messaging package

Firebase Cloud Messaging

## Functions

|  Function | Description |
|  --- | --- |
|  [deleteToken(messaging)](./messaging.deletetoken.md) | Deletes the registration token associated with this <code>FirebaseMessaging</code> instance and unsubscribes the <code>FirebaseMessaging</code> instance from the push subscription. |
|  [getMessaging(app)](./messaging.getmessaging.md) | Retrieves a Firebase Cloud Messaging instance. |
|  [getToken(messaging, options)](./messaging.gettoken.md) | Subscribes the <code>FirebaseMessaging</code> instance to push notifications. Returns an Firebase Cloud Messaging registration token that can be used to send push messages to that <code>FirebaseMessaging</code> instance.<!-- -->If a notification permission isn't already granted, this method asks the user for permission. The returned promise rejects if the user does not allow the app to show notifications. |
|  [isSupported()](./messaging.issupported.md) |  Copyright 2020 Google LLC<!-- -->Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at<!-- -->http://www.apache.org/licenses/LICENSE-2.0<!-- -->Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. |
|  [onMessage(messaging, nextOrObserver)](./messaging.onmessage.md) | When a push message is received and the user is currently on a page for your origin, the message is passed to the page and an <code>onMessage()</code> event is dispatched with the payload of the push message. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [FcmOptions](./messaging.fcmoptions.md) | Options for features provided by the FCM SDK for Web. See [WebpushFcmOptions](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#webpushfcmoptions) |
|  [FirebaseMessaging](./messaging.firebasemessaging.md) | Public interface of the Firebase Cloud Messaging SDK. |
|  [MessagePayload](./messaging.messagepayload.md) | Message payload that contains the notification payload that is represented with [NotificationPayload](./messaging.notificationpayload.md) and the data payload that contains an arbitrary number of key-value pairs sent by developers through the [Send API](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#notification) |
|  [NotificationPayload](./messaging.notificationpayload.md) | Display notification details. They are sent through the [Send API](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#notification) |
