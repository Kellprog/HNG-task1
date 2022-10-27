const express =require("express")

const app = express();

app.get("/", function(req,res){

 const file  ={
    slackUsername :"TG_kommands",
    backend: true,
    age: 23,
    bio:"Hi my Name is ThankGod Ebiri, I'm from rivers state, Nigeria. Started my tech journey earlier this year. I look forward to the experiences and training HNG has to offer to enable me thrive in the real world  " }

  res.send(file);
});

  


app.listen(3000,function(){
  console.log("server started on port 3000 go");
})
