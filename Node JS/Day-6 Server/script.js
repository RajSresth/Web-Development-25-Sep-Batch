const http=require("http");

const server=http.createServer(function(req,res){
    if(req.url === "/home")
    {
        res.end("Home Page")
    }
    else if(req.url === "/about")
    {
        res.end("About Page")
    }
    else{
    }
    res.end("Welcome to Our Website")
})

server.listen(3000);



