/*导入包*/ 
const express=require("express");
const bodyParser=require("body-parser");
//导入路由
const userRouter=require("./router/user")
/*服务器启动监听5050,5050端口为新浪云部署端口*/
var app=express()
app.listen(5050,function(){
    console.log("ok5050");
});
/*使用body中间件*/ 
app.use(bodyParser.urlencoded({
    extended:false
}))
/*使用中间件express把静态文件托管到public下*/
app.use(express.static(__dirname+"/public"));
/* 路由重定向*/
app.get("/",function(){
    res.sendFile(__dirname+"public/index.html");
});
//把路由器挂在到user下
app.use("/user",userRouter);
