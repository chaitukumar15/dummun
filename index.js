var express=require("express");

var app=express();

var multer=require("multer");

var store=multer.diskStorage({
    destination:(req,file,cb)=>{
        
        console.log(__dirname);
        console.log(file);
        
      
        cb(null,__dirname+"/image");
       

    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+file.originalname)
    }
})


var uplaod=multer({storage:store})

app.get("/product",uplaod.single("file"),(req,res)=>{

    console.log(req.file);
    var h=req.file.size*0.001
res.send({
    n:h,
    J:req.file
})

})

var port=3004;

app.listen(port,()=>{
console.log("hi this is server started");
})