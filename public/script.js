window.onload = function() {};

let html = document.getElementById("html");
let css = document.getElementById("css");
let script = document.getElementById("script");
let code = document.getElementById("code");

let strengths = document.getElementById("strengths");
let projects = document.getElementById("projects");
let renderedPage = document.getElementById("rendered_page");

html.addEventListener("click", function loadHtml() {
  code.innerHTML = `const mustacheExpress = require('mustache-express')<br>const session  = require('express-session')<br>const bodyParser = require('body-parser')<br>const models = require('./models')<br>const express = require('express')<br>const multer = require('multer')<br>const app = express()<br><br>app.use(bodyParser.urlencoded({extended:false}))<br>
    app.use('/contactme', express.static('contactme'))<br>app.use('/projectimgs', express.static('projectimgs'))<br>app.use('/strengthimages', express.static('strengthimages'))<br>app.use('/public', express.static('public'))<br>app.engine('mustache', mustacheExpress())<br>app.set('view engine', 'mustache')<br>app.set('views', './views')<br><br>
    const storage = multer.diskStorage({<br>destination : './uploads/',<br>filename : ( (req,file,cb) => {<br>cb(null, file,fieldname + '-' + Date.now() + path.extname(file.originalname))<br>})<br>})<br><br>const upload = multer({<br>storage : storage<br>})<br><br>app.use(session({<br>secret : 'fastmonkeys369',<br>resave : 'false',<br>saveUninitialized : true<br>
    }))<br><br>app.get('/', (req,res) => {<br>res.render('homepage', {username : req.session.username})<br>})<br><br>app.get('/register', (req,res) => {<br>res.render('registeruser')<br>})<br><br>app.get('/login', (req,res) => {<br>res.render('loginuser')<br>})<br><br>app.get('/blog', (req,res) => {<br>res.send('Blog Page')<br>
    })<br><br>app.get('/newblog', (req,res) => {<br>if(req.session.username) {<br>res.render('newblog')<br>} else {<br>res.redirect('/')<br>}<br>})<br><br>app.get("/contact", (req,res) => {<br>res.send('Contact Page')<br>})<br><br>app.post('/register', (req,res) => {<br>models.user.create({<br>username: req.body.username,<br>
    password: req.body.password,<br>firstname: req.body.firstname,<br>lastname: req.body.lastname<br>}).then(() => {<br>res.redirect('/')<br>})<br>})<br><br>app.post('/login', (req,res) => {<br>var user = models.user.findOne({<br>where:{<br>username : req.body.username,<br>password : req.body.password<br>}<br>}).then(user => {<br>
    if(user.password === req.body.password) {<br>req.session.username = req.body.username<br>req.session.userId = user.dataValues.id<br>req.session.authenticated = true<br>res.redirect('/')<br>}<br>})<br>})<br><br>app.post('/blog', upload.single('postimg'), (req,res) => {<br>models.post.create({<br>title: req.body.title,<br>body: req.body.body,<br>author: req.body.author,<br>image: req.file.path<br>})<br>})<br><br>app.listen(3000, () => {<br>console.log('You are live')<br>})<br><br>`;
});

css.addEventListener("click", function loadCss() {
  code.innerHTML = `CSS Text`;
});

script.addEventListener("click", function loadScript() {
  code.innerHTML = `Script Text`;
});

strengths.addEventListener("click", () => {
  $("#render_projects").css({
    display: "none"
  });
  $("#render_strengths").css({
    display: "inline-block"
  });
});

projects.addEventListener("click", () => {
  $("#render_projects").css({
    display: "inline-block"
  });
  $("#render_strengths").css({
    display: "none"
  });
});
