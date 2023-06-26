const http = require('http');

const server=http.createServer((req,res) =>{
if(req.url ==='/'){
    res.end('traggito uno');
}if(req.url ==='/due'){
    res.end('altra sezione');
}
res.end('<h1> error 404</h1>')
})

server.listen(5000); 