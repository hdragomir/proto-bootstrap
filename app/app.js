// Generated by CoffeeScript 1.4.0
(function(){"use strict";var e,t,n;t=require("express");n=require("hulk-hogan");e=t.createServer(t.logger(),t.cookieParser());e.configure(function(){e.use(t["static"](""+__dirname+"/public"));e.set("views",""+__dirname+"/views");e.set("view options",{layout:!1});e.set("view engine","html");return e.register(".html",n)});e.error(function(e,t,n,r){console.log(e);return n.send("what are you doing?")});e.get("/*",function(e,t,n){return t.render((e.params[0]||"index").replace("..",""))});e.listen(process.env.PORT||3650,function(){return console.log("it's on")});module.exports=e}).call(this);