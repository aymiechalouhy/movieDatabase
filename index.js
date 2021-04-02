const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/test", (req, res) => {
  res.send({status:200, message:"ok"});
});

app.get("/time", (req, res) => {
let theDate = new Date.now();
let hours = theDate.getHours();
let minutes = theDate.getMinutes();
let seconds = theDate.getSeconds();
res.send({status:200," " : hours + ":" + minutes + ":" + seconds });

});

app.get("/hello/:id", (req, res) => {
  res.send({status:200, message:"Hello" + req.params.id});
});

app.get("/search", (req, res) => {
  if(req.query['s']){
  res.send({status:200, message:"ok", data:req.query['s']});
  }
  else
  {
    res.send({status:500, error:true, message:"you have to provide a search"});
    res.status(500);
    //res.sendStatus(500);
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});