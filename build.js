// const fs = require("fs");
// var content = "";
// var texts = "";

// var inter,lines,build_files;
// var out = "";
// fs.readFile("code_example.js",function(err,data){
//   //files_to_read=data.split("\n");
//   //lines = data.toString().split("\r\n");
//   setTimeout(final_build,10);
//   var code = data.toString();
// var lines = code.split("\n");

// lines.forEach(
//   line=>{
//     if(line.match(/.+\(/g)){
//       temp = "";
//       line2=line;
//       line.split("(")[1].split(")")[0].split(",").forEach(
//         args=>{
//           var things = args.split(" ");
//           temp+="if("+things[0]+".name!="+things[1]+".constructor.name)throw new Error(\"input is not of type "+things[0]+"\");\n";
//           line2=line2.replace(new RegExp(things[0]),"");
//           console.log(temp);
//           console.log(line);
//         }
//       );
//       out+=line2+"\n";
//       out+=temp;
//     }else{
//       out+=line+"\n";
//     }
// }
// );
// });
// function final_build(){
//   fs.appendFile(process.argv[3]||"buit_"+Date.now()+".js",out,function(err){
//   });
//   console.log("done!");
// }
process.argv.shift();
process.argv.shift();
const fs = require("fs");
var content = "";
var texts = "";

var inter,lines,build_files;
var out = "";
fs.readFile("code_example.js",function(err,data){
  //files_to_read=data.split("\n");
  //lines = data.toString().split("\r\n");
  setTimeout(final_build,10);
  var code = data.toString();
var lines = code.split("\n");

lines.forEach(
  line=>{
    if(line.match(/(constructor\([a-zA-Z #$])|(function.+\([a-zA-Z #$])|(\([a-zA-Z #$]+\)=>)/g)){
      temp = "";
      line2=line;
      line.split("(")[1].split(")")[0].split(",").forEach(
        args=>{
          var things = args.split(" ");
          temp+="if("+things[0]+".name!="+things[1]+".constructor.name)throw new Error(\"input is not of type "+things[0]+"\");\n";
          line2=line2.replace(new RegExp(things[0]),"");
          //console.log(temp);
          //console.log(line);
        }
      );
      out+=line2+"\n";
      out+=temp;
    }else{
      out+=line+"\n";
    }
}
);
});
function final_build(){
  fs.appendFile(process.argv[0]||"buit_"+Date.now()+".js",out,function(err){
  });
  console.log("done!");
}
