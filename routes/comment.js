var express = require("express"),
    router = express.Router({mergeParams:true}),
    Campground = require("../models/campground"),
    Comment = require("../models/comment"),
    middleware = require("../middleware");



//+++++++++++++++++++++++++++++++++++++++++++++++++
//          Comment routes
//+++++++++++++++++++++++++++++++++++++++++++++++++

//new

router.get("/new",middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err,campground){
        if(err){
            console.log(err);
        }else{
            res.render("comment/new",{campground : campground});
        }
            
    });

});

// logic handle

router.post("/",middleware.isLoggedIn,function(req,res){
    Campground.findById(req.params.id,function(err, campground) {
        if(err){
            res.redirect("/campgrounds");
        }else{
            Comment.create(req.body.comment, function(err,comment){
                if(err){
                    req.flash("error","Something went wrong!")
                    console.log(err);
                }else{
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username; 
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    req.flash("success","Comment Added!!")
                    res.redirect("/campground/"+ campground._id);
                }
        
            });
        }
    });
});

//comment edit route

router.get("/:comment_id/edit", middleware.checkCommentOwnership,function(req,res){
    Comment.findById(req.params.comment_id,function(err, foundComment) {
        if(err){
            res.redirect("back");
        }else{
            res.render("comment/edit",{campground_id: req.params.id, comment: foundComment });
        }
    });
    
});

//update route

router.put("/:comment_id",middleware.checkCommentOwnership,function(req,res){
     Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment,function(err,updateComment){
         if(err){
             res.redirect("back");
         }else{
             res.redirect("/campground/"+req.params.id);
         }
     });
});

//destory route

router.delete("/:comment_id",middleware.checkCommentOwnership,function(req,res){
    Comment.findByIdAndRemove(req.params.comment_id,function(err){
        if(err){
            res.redirect("back");
        }else{
            req.flash("success","Comment Deleted")
            res.redirect("/campground/"+req.params.id);
        }
    });
});

// middleware




module.exports = router;