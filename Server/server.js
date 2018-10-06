var express =require("express");
var bodyParser=require("body-parser");
var session = require('express-session')

var app=express();
var router=express.Router();
var port=process.env.API_PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials','true');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader("Cache-Control", "no-cache");
    next();
})
app.use(session({
    secret: 'Shakti Session',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 10 * 60 * 1000 * 365
    }
}));

app.use("/api", router);

router.get("/", function(req, res) {
    console.log('req ',req.headers);
    req.session.userid=req.headers.cookie;
    console.log(req.session);
    console.log('hey u get the page');
    res.json({ message: "API Initialized!"});
   });

router.route("/comments").get(function(req, res) {
       console.log('u r on the comments');  
       res.json({title : ' Comments Section'}); 
});

app.listen(port, function() {
    console.log(`api running on port ${port}`);
   });