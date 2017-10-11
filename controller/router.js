var file=require('../models/file.js');
var formidable=require('formidable');
var path=require('path');
var fs=require('fs');
exports.showIndex=function(req,res){
    res.render('index',{
        title:'小小相册',
        albums:file.getAllAlbums()
    });
};
exports.showAlbum=function(req,res){
    res.render('detail',{
        title:'小小相册',
        photos:file.getAllPhoto(req.params.albumName)
    });
    //res.send("详情页："+req.params.albumName)
};
exports.showUp=function(req,res){
    res.render('up',{
        title:'小小相册',
        bread:'上传',
        albums:file.getAllAlbums()
    })
};
exports.doPost=function(req,res,next){
    if(req.url=='/up' && req.method.toLowerCase()=='post'){
        var form=new formidable.IncomingForm();
        form.uploadDir=path.normalize(__dirname+"/../uploads/tempup/");
        form.parse(req,function(err,fields,files){
            console.log(fields);
            console.log(files);
            if(err){ next();return;}
            var extname=path.extname(files.picAdd.name);//图片后缀名
            var oldPath=files.picAdd.path;
            var newPath=path.normalize(__dirname+"/../uploads/"+ fields.chooseDir + "/" + fields.picName + extname);
            console.log(newPath);
            fs.rename(oldPath,newPath,function(){

            })
        })

        res.send('<h1>提交成功<a href="http://127.0.0.1:3000">点我</a>返回</h1>');
    }else{
        res.send('err');
    }
}




