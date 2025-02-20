const http=require('http');
const { json } = require('stream/consumers');
const users=[{
    id: 1 , name: 'rahul',email:'rahul@example .com'
},
{
     id: 2 , name: 'raj',email:'raj@example .com'
},
{
     id: 3 , name: 'ramesh',email:'ramesh@example .com'
}
]
const server=http.createServer((req,res) => {
 res.writeHead(200,{'content-type': 'application/json'});
 const nameData = users.map((user) =>{
    return user.name;
 });
 res.end(JSON.stringify(users));
});
const port=3000;
server.listen(port,()=>{
 console.log(`server running at http://localhost:${port}`)
});