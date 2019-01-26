var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/user");

//home route
router.get("/", function(req,res){
    res.render("landing");
});



//++++++++++++++++++++++++++++++++++++
// AUTH ROUTHES
// ++++++++++++++++++++++++++++++++++++


// Sign up

router.get("/register",function(req, res) {
    res.render("register");
});

// Sign up logic

router.post("/register",function(req, res) {
    var newUser = new User({ username: req.body.username});
   User.register(newUser, req.body.password, function(err,user){
       if(err){
           req.flash("error",err.message);
           console.log(err);
           return res.redirect("back");
       }
       passport.authenticate("local")(req,res,function(){
           req.flash("success","welcome to yelpcamp "+ user.username);
           res.redirect("/campground");
       });
   });
});

//LOGIN form
router.get("/login",function(req, res) {
    res.render("login");
});

//login logic
router.post("/login", passport.authenticate("local",{
    successRedirect:"/campground",
    failureRedirect:"/login"
}), function(req, res) {

    
});


//logout

router.get("/logout",function(req, res) {
    req.logout();
    req.flash("success","Logged You Out");
    res.redirect("/campground");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;