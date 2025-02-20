const http=require('http');
const fspromise=require('fs/promises');
const read =async () =>{
  const data = await fspromise.readFile("./home.html","utf-8");
  const port=3000;
const server=http.createServer((req,res)=>{
    // res.statuscode = 200;
    // res.setHeader('content-Type','text-/plain');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data);

});
server.listen(port,() =>{
    console.log(`server is running on port ${port}`)
});

}
read();
