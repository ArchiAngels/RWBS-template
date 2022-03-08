const http = require('http');
const path = require('path');
const fs = require('fs');
let port = 3001;

http.createServer((req,res)=>{

    console.log(req.url);
    if(req.url == '/'){
        res.write(fs.readFileSync('./index.html'));
        res.end();
    }else if(req.url == '/dist/main.bundled.js'){
        res.write(fs.readFileSync('./dist/main.bundled.js'));
        res.end()
    }else if(req.url == '/dist/d16bc6332024d56992d6.ttf'){
        
        res.write(fs.readFileSync('./dist/d16bc6332024d56992d6.ttf'));
        res.end()
    }
    else{
        res.end();
    }

}).listen(port,()=>{
    console.log('\n\n\nServer is running');
})