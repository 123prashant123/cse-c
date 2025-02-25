const http = require('http');
const axios=require('axios')
const port = 3000;
const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "content-type":"text/html"
  })
  // const response = await fetch("https://dummyjson.com/products");
  // const data = await response.json();
  const response = await axios.get("https://dummyjson.com/products");
  const alldata = await response.data.products;
  let frontend = `<html><head></head><body>`
  alldata.forEach((product) => {
    frontend += `<div><img src= ${product.thumbnail}></div>`
  });
  frontend += `</body></html>`
  // res.write("HELLO, ")
  res.end(frontend)
});
server.listen(port, () => {
  console.log(`runninng on port: ${port}`)
});