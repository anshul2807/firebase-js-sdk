/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Subset of Web Worker types from lib.webworker.d.ts
 * https://github.com/Microsoft/TypeScript/blob/master/lib/lib.webworker.d.ts
 *
 * Since it's not possible to have both "dom" and "webworker" libs in a single project, we have to
 * manually declare the web worker types we need.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */ // These types are from TS

// Not the whole interface, just the parts we're currently using. If TS claims that something does
// not exist on this, feel free to add it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ServiceWorkerGlobalScope {
  readonly location: WorkerLocation;
  readonly clients: Clients;
  readonly registration: ServiceWorkerRegistration;
  addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(
    type: K,
    listener: (
      this: ServiceWorkerGlobalScope,
      ev: ServiceWorkerGlobalScopeEventMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
}

// Only makes `clients` and `registration` optional because in tests, we reset them by calling
// `delete` and TS2790 enforces The operand of a `delete'` operator must be optional.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ServiceWorkerGlobalScopeForTesting {
  readonly location: WorkerLocation;
  readonly clients?: Clients;
  readonly registration?: ServiceWorkerRegistration;
  addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(
    type: K,
    listener: (
      this: ServiceWorkerGlobalScope,
      ev: ServiceWorkerGlobalScopeEventMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
}

// Same as the previous interface
interface ServiceWorkerGlobalScopeEventMap {
  notificationclick: NotificationEvent;
  push: PushEvent;
  pushsubscriptionchange: PushSubscriptionChangeEvent;
}

interface Client {
  readonly id: string;
  readonly type: ClientTypes;
  readonly url: string;
  postMessage(message: any, transfer?: Transferable[]): void;
}

interface ClientQueryOptions {
  includeReserved?: boolean;
  includeUncontrolled?: boolean;
  type?: ClientTypes;
}

interface WindowClient extends Client {
  readonly focused: boolean;
  readonly visibilityState: VisibilityState;
  focus(): Promise<WindowClient>;
  navigate(url: string): Promise<WindowClient>;
}

interface Clients {
  claim(): Promise<void>;
  get(id: string): Promise<any>;
  matchAll(options?: ClientQueryOptions): Promise<Client[]>;
  openWindow(url: string): Promise<WindowClient | null>;
}

interface ExtendableEvent extends Event {
  waitUntil(f: Promise<any>): void;
}

interface NotificationEvent extends ExtendableEvent {
  readonly action: string;
  readonly notification: Notification;
}

interface PushMessageData {
  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  json(): any;
  text(): string;
}

interface PushEvent extends ExtendableEvent {
  readonly data: PushMessageData | null;
}

interface PushSubscriptionChangeEvent extends ExtendableEvent {
  readonly newSubscription: PushSubscription | null;
  readonly oldSubscription: PushSubscription | null;
}

interface WorkerLocation {
  readonly hash: string;
  readonly host: string;
  readonly hostname: string;
  readonly href: string;
  readonly origin: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;
  toString(): string;
}
