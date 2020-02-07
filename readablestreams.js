var http=require('http');
var fs=require('fs');
var myReadStream=fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname + '/writeMe1.txt');
myReadStream.on('data',function(chunk){
    console.log('new chunk recieved:');
    console.log(chunk);
    myWriteStream.write(chunk);
})