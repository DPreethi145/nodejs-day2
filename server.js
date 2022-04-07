// console.log("hello");

// Creating Server
const express = require("express");

const server = express();

const middleware = (req,res,next)=>{
    console.log("this is middleware");
    next() // next blocks the flow and take it back to the requested route
}
 server.use(middleware);

server.get("/",(request,response)=>{
    response.send("hello world")
})


server.get("/user",(request,response)=>{
    response.send({name:"preethi",age:22})
})

server.get("/students",(request,response)=>{
    response.send("<h1>john</h1>")
})

server.listen(3000,(()=>{
    console.log('server running')
}))