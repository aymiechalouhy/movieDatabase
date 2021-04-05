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

const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get("/movies/add", (req, res) => {
  res.send({status:200, message:"ok"});
});

app.get("/movies/get", (req, res) => {
  res.send({status:200, data:movies});
});

app.get("/movies/edit", (req, res) => {
  res.send({status:200, message:"ok"});
});

app.get("/movies/delete", (req, res) => {
  res.send({status:200, message:"ok"});
});

const sortedMovies = movies.sort((a, b) => b.date - a.date)

app.get("/movies/get/:inputRequest", (req, res) => {
  if(req.params.inputRequest === "by-date"){
  res.send({status:200, data: sortedMovies(movies, 'year')});
  }

  if(req.params.inputRequest === "by-rating"){
    res.send({status:200, data: sortedMovies(movies, 'rating')});
    }

  if(req.params.inputRequest === "by-title"){
    res.send({status:200, data: sortedMovies(movies, 'title')});
     }
});

app.get("/movies/get/:id", (req, res) => {
  if(req.params.id){ 
    res.send({status:200, data:movies});
  }
  else{
    res.send({status:404, error:true, message:'the movie <ID> does not exist'});
  }});


  app.get('/movies/add', (req, res) => {
    var t = req.query.title;
    var y = req.query.year;
    var r = req.query.rating;
    if (t == "" || y == "" || y.toString().length != 4 || isNaN(y))
     { res.status(403).send('You cannot create a movie without providing a title and a year') }
    else {
        if (r == "" || typeof r == undefined) { r = 4; }
    }
    movies.push({ title: t, year: parseInt(y), rating: parseInt(r) });
    res.status(200).send(movies)
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});