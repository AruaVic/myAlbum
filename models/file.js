var fs=require('fs');
exports.getAllAlbums=function(){
    var allAlbums=[];
    //异步
    //fs.readdir('./uploads',function(err,files){
    //        //console.log(files);
    //        for(var i=0;i<files.length;i++){
    //            var fsStat=fs.statSync('./uploads/'+files[i]);
    //            if(fsStat.isDirectory()){
    //                console.log(files[i]+"是目录");
    //                allAlbums.push(files[i]);
    //            }else{
    //                console.log(files[i]+"是文件");
    //            }
    //            //异步
    //            //fs.stat('./uploads/'+files[i],function(err,stats){
    //            //    console.log(stats.isDirectory());
    //            //})
    //        }
    //    })
    //同步
    var fsReadDir=fs.readdirSync('./uploads');
    for(var i=0;i<fsReadDir.length;i++){
        var fsStat=fs.statSync('./uploads/'+fsReadDir[i]);
        if(fsStat.isDirectory()){
            console.log(fsReadDir[i]+"是目录");
            allAlbums.push(fsReadDir[i]);
        }else{
            console.log(fsReadDir[i]+"是文件");
        }
    }
    return allAlbums;
}
exports.getAllPhoto=function(url){
    var allPhoto=[url];
    var fsReadDir=fs.readdirSync('./uploads/'+url);
    console.log(fsReadDir);
    //if(fsReadDir=)
    for(var i=0;i<fsReadDir.length;i++){
        var fsStat=fs.statSync('./uploads/'+url+'/'+fsReadDir[i]);
        if(fsStat.isFile()){
            console.log(fsReadDir[i]+"是文件");
            allPhoto.push(fsReadDir[i]);
        }else{
            console.log(fsReadDir[i]+"是目录");
        }
    }
    console.log(allPhoto);
    return allPhoto;
}


