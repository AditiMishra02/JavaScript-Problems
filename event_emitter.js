// File: event_emitter.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (message) => {
  console.log('Message:', message);
});

myEmitter.emit('event', 'Hello, EventEmitter!');
