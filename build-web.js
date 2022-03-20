const fs=require("fs");
const path=require("path");
let indexContent=fs.readFileSync(path.join(__dirname, "index.js")).toString();
let newFile=indexContent.replace("module.exports=checkLocation;", "export default checkLocation;");
fs.writeFileSync(path.join(__dirname, "weather-geo-web.js"), Buffer.from(newFile));