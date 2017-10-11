var express=require('express');
var path=require('path');
var router=require('./controller/router.js');


var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'uploads')));


app.use('*',function(req,res,next){
    res.header('content-type','text/html;charset=utf8');
    next();
})

app.get('/',router.showIndex);
app.get('/up',router.showUp);
app.post('/up',router.doPost);
app.get('/:albumName',router.showAlbum);




app.all('*',function(req,res){
    res.end('<h1>页面没有找到！404</h1>');
})

app.listen(3000,'127.0.0.1');