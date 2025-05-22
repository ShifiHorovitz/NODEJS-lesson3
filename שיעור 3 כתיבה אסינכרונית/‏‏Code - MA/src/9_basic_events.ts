import EventEmitter from 'node:events'; 
  
const eventEmitter = new EventEmitter();
eventEmitter.on('newMessage', () => { 
    console.log('New message arrived'); 
}); 

/*eventEmitter.on('newMessage', () => { 
    console.log('We got a message!'); 
}); */


eventEmitter.emit('newMessage'); 
 //npx ts-node ./src/1_basic_events.ts

 /*
npm install typescript --save-dev
npm install @types/node --save-dev

tsconfig-    "module": "CommonJS",
*/