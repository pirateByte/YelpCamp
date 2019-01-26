var express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground"),
    middleware = require("../middleware");




//INDEX
router.get("/",function(req,res){
    req.user;
        Campground.find({}, function(err,allCampgrounds){
            if(err){
                console.log(err);
            }else{
             res.render("campground/index",{campground : allCampgrounds , currentUser:req.user });   
            }
        });
       
});

//create
router.post("/",middleware.isLoggedIn ,function(req,res){
   var name = req.body.name;
   var image = req.body.image;
   var price = req.body.price;
   var desc = req .body.description;
   var author= {
       id : req.user._id,
       username : req.user.username
   }
   var newCampground = { name:name, image:image,description:desc,author:author,price:price};
   Campground.create(newCampground,function(err,newCampground){
       if(err){
           console.log(err);
       }else{
           res.redirect("/campground");   
       }
   });

});

//new
router.get("/new",middleware.isLoggedIn, function(req, res) {
    res.render("campground/new");
});

//SHOW     
router.get("/:id",function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec( function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            res.render("campground/show", {campground: foundCampground});
        }
    });
});


//Edit campground route
router.get("/:id/edit",middleware.checkOwner,function(req, res) {
     Campground.findById(req.params.id, function(err,foundCampground){
         if(err){
             res.redirect("back");
         }else{
            res.render("campground/edit",{campground : foundCampground}); 
         }
    }); 
});



//Update campground route

router.put("/:id",middleware.checkOwner,function(req,res){
   Campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err,updateCampground){
       if(err){
           res.redirect("/campground");
       }else{
           res.redirect("/campground/" + req.params.id);
       }
   });
   
});

//Destory comground route

router.delete("/:id",middleware.checkOwner,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/campground");
        }else{
            res.redirect("/campground")
        }
    })
})
    



module.exports = router;
