const EventEmitter = require('events');
const readline = require('readline');


const eventEmitter = new EventEmitter();

eventEmitter.on('test', () => {
    console.log('Handled test');
});

const emitter = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

emitter.on("my-event", (msg1, msg2) => {
    console.log(msg1);
    console.log(msg2);
});


