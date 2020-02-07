var express = require('express')
var app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
//res.sendFile(__dirname + '/index.html');
   res.render('index');
});
app.get('/contact',function(req,res){
   //res.sendFile(__dirname +'contactus.html');
   res.render('contact');
});
app.get('/profile/:name',function(req,res){
// res.send('You requested to see a profile with the name of '+ req.params.name);
var data={age: 29, job:'Developing', hobbies: ['eating','sleeping','learning']};
res.render('profile',{person: req.params.name, data:data});
});
app.listen(3000);
 


