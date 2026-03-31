const Y = require('yjs');
const WebSocket = require('ws');
const { WebsocketProvider } = require('y-websocket');

const doc1 = new Y.Doc();
const ws1 = new WebsocketProvider('ws://localhost:3000', 'test-room', doc1, { WebSocketPolyfill: WebSocket });

const doc2 = new Y.Doc();
const ws2 = new WebsocketProvider('ws://localhost:3000', 'test-room', doc2, { WebSocketPolyfill: WebSocket });

ws1.on('status', event => console.log('1:', event.status));
ws2.on('status', event => console.log('2:', event.status));

setTimeout(() => {
  doc1.getText('test').insert(0, 'hello ');
  setTimeout(() => {
    console.log('doc2 has:', doc2.getText('test').toString());
    process.exit(doc2.getText('test').toString() === 'hello ' ? 0 : 1);
  }, 500);
}, 500);
