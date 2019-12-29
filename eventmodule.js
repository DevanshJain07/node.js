var events=require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvents',function(msg){
    console.log(msg);
});

myEmitter.emit('someEvents','the event was emitted');

  

