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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});