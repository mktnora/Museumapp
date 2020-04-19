const express = require('express');
const app = express();

const port = 5000;
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

const blogposts = require('./data/blogposts.json');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/newsfeed', function (req, res) {
    res.render('newsfeed', {
        postsArray: blogposts.blog
    })
});

app.get('/blog/:id', function (req, res) {
    res.render('detailpost', {
        post: blogposts.blog[req.params.id],
        lastPostId: blogposts.blog.length,
        postId: req.params.id
    })
});

app.get('/about', function(req, res) {
    res.render("about");
  });

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get("/search", function(request, response) {
    var zoekTerm = request.query.search;
  });

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
