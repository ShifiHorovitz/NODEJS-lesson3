import EventEmitter from 'node:events'; 
  
const eventEmitter = new EventEmitter();

eventEmitter.on('newMessage', (message: string) => { 
    console.log(`New message arrived: ${message}`); 
}); 


eventEmitter.emit('newMessage', "message");

eventEmitter.on('newMessage', (message: string) => { 
    console.log(`la la la`); 
}); 

let counter = 0;
const interval = setInterval(() => {
    eventEmitter.emit('newMessage', `message ${counter++}`);
    if (counter == 3)
        clearInterval(interval); 
}, 1000);

//npx ts-node ./src/2_events_with_params.ts
