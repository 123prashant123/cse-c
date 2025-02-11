const fs = require("fs");
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
// fs.writeFileSync("./data1.txt","Hello Abes","utf-8");
// fs.writeFileSync("./data1.txt","Hello Abesec","utf-8");
// fs.appendFileSync("./data1.txt","students","utf-8");
// fs.renameSync("./data1.txt","./data3.txt");
// fs.unlinkSync("./data.txt");
if(data.match("H")){
    console.log("File contains 'H'")
    const newdata = data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}

