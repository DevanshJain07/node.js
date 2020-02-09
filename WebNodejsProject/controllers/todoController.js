var bodyParser=require('body-parser');
var mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb+srv://Devansh:devansh@cluster0-ykknm.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo=mongoose.model('Todo',todoSchema);
// var itemOne=Todo({item: 'buy flowers'}).save(function(err){
//     if(err) throw err;
//     console.log('item saved');
// });

//var data=[{item: 'App Development'},{item: 'Web Development'},{item: 'AI'},{item: 'Machine Learning'}];
var urlencodedParser=bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo',function(req,res){
     Todo.find({},function(err,data){
         if(err) throw err;
         res.render('todo',{todos:data})
    });
    });

    app.post('/todo',urlencodedParser,function(req,res){
        var newTodo=Todo(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item',function(req,res){
     data=data.filter(function(todo){
         Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
             if(err) throw err;
             res.json(data);
         });
       });
     });
    }

