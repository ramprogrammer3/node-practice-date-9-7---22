
const http = require('http')
const port = 8080;
const axios = require('axios')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if(req.url == '/users'){
        res.writeHead(201,{"content-type": "application/json"})
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            res.write(JSON.stringify(response.data))
            res.end()
        })
    }else if(req.url == "/post"){
        res.writeHead(200, {"content-type" : "application/json"})
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
            res.write(JSON.stringify(response.data))
            res.end();
        })
    }else if(req.url == "/home"){
        fs.readFile("./index.html",(err,text)=>{
            if(err){
                res.writeHead(404)
                res.write("page under service")
                res.end()
            }else{
                res.writeHead(200,{'content-type': "text/html"});
                res.write(text)
                res.end();
            }
        })
    }else if(req.url == '/image'){
        fs.readFile('./image.jpg',(err,data)=>{
            if(err){
                res.writeHead(404)
                res.write("image not found ")
                res.end();
            }else{
                res.writeHead(200,{'content-type': "image/jpg"})
                res.write(data)
                res.end()
            }
        })
    }else if(req.url == "/video"){
        fs.readFile('./anjali.mp4',(err,data)=>{
            if(err){
                res.writeHead(404)
                res.write("video not found ");
                res.end()
            }else{
                res.writeHead(200,{'content-type': "video/mp4"})
                res.write(data);
                res.end();
            }
        })
    }
    else{
        res.write("Home page")
        res.end();
    } 
})

server.listen(port,()=>{
    console.log(`server is runnin on port ${port}`)
})