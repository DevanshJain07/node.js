var http=require('http');
var fs=require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    if(req.url === "/home" || req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contactus.html').pipe(res);      
    }
    else if(req.url === '/api/devansh'){
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj={
        name: 'Devansh',
        job: 'Student',
        age: 20
    };
    res.end(JSON.stringify(myObj))
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);     
    }
});

    server.listen(3000,'127.0.0.1');
    console.log('yo buddy,now listening to port 3000');