const express =require("express")
const cors = require("cors");



const app = express();

app.use(cors())
app.get("/", function(req,res){

 const file  ={
    slackUsername :"TG_kommands",
    backend: true,
    age: 23,
    bio:"Hi my Name is ThankGod Ebiri, I'm from rivers state, Nigeria. Started my tech journey earlier this year. I look forward to the experiences and training HNG has to offer to enable me thrive in the real world  " }

  res.send(file);
});



let port = process.env.PORT;
if(port == null || port ==""){
  port = 3000;
}

app.listen(port,function(){
  console.log("server started on port 3000 go");
})
