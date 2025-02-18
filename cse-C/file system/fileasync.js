const fspromise=require('fs/promises');
const read =async () =>{
  const data = await fspromise.readFile("./data.txt","utf-8");
  console.log(data)
}

const write =async () =>{
  const data = await fspromise.writeFile("./data2.txt","my name is py","utf-8");
  console.log(data)
}
module.exports=read;
// read();
// write();
// console.log("first");
// console.log("second");
// console.log("third");
// console.log("fourth");