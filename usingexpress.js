var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
var urlencodedParser=bodyParser.urlencoded({ extended: false });

app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('contact-success',{data: req.body });
});

app.get('/',function(req,res){
//res.sendFile(__dirname + '/index.html');
   res.render('index');
});

app.get('/contact',function(req,res){
   //res.sendFile(__dirname +'contactus.html');
   console.log(req.query);
   res.render('contact',{qs:req.query});
});

app.get('/profile/:name',function(req,res){
// res.send('You requested to see a profile with the name of '+ req.params.name);
var data={age: 29, job:'Developing', hobbies: ['eating','sleeping','learning']};
res.render('profile',{person: req.params.name, data:data});
});

app.listen(3000);
 


