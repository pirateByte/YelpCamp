var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seed"),
    Comment = require("./models/comment"),
    passport = require("passport"),
    LocalStratergy = require("passport-local"),
    User = require("./models/user"),
    methodOverride = require("method-override"),
    flash = require("connect-flash");
    
var commentRoutes = require("./routes/comment"),
    campgroundRoutes = require("./routes/campground"),
    indexRoutes = require("./routes/index");

//Seed the database   
// seedDB();

mongoose.set('useCreateIndex', true);
//mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser:true});
mongoose.connect("mongodb://username:password@ds161224.mlab.com:61224/yelpcamp",{useNewUrlParser:true});



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//Passport configration
app.use(require("express-session")({
    secret:"why so sad buddy",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.use(function(req,res,next){
    res.locals.currentUser = req.user,
    res.locals.error = req.flash("error"),
    res.locals.success = req.flash("success");
    next();
});

app.use("/",indexRoutes);
app.use("/campground/",campgroundRoutes);
app.use("/campground/:id/comment",commentRoutes);


app.listen(process.env.PORT || 3000 ,process.env.IP,function(){
    console.log("Server on!!!");
});