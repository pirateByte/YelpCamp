var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")
var data = [
    {
        name: "Icy ice",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada, nisl eget imperdiet egestas, metus eros porttitor urna, ac bibendum neque dui ac sem. Sed sodales suscipit ante sed rutrum. In ultricies felis et pretium dapibus. Curabitur non blandit nisi, id tincidunt sapien. Nulla feugiat dui pellentesque elit accumsan, faucibus finibus nulla hendrerit. Phasellus ut nulla ullamcorper, dapibus est sit amet, rhoncus orci. Donec ut interdum arcu. Integer et molestie velit, et auctor nisl. Praesent imperdiet pulvinar ante, gravida gravida ante. Duis eleifend, augue in sodales consectetur, tellus lectus rutrum sapien, ac dignissim est magna sed enim. Fusce egestas fringilla nisi, ac viverra tortor. Duis nisi turpis, sodales et consectetur id, sagittis quis purus.  "
    },
    {
        name: "Green Gross",
        image: "https://c2.staticflickr.com/4/3467/3976010719_c88f60d6f4_z.jpg?zz=1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada, nisl eget imperdiet egestas, metus eros porttitor urna, ac bibendum neque dui ac sem. Sed sodales suscipit ante sed rutrum. In ultricies felis et pretium dapibus. Curabitur non blandit nisi, id tincidunt sapien. Nulla feugiat dui pellentesque elit accumsan, faucibus finibus nulla hendrerit. Phasellus ut nulla ullamcorper, dapibus est sit amet, rhoncus orci. Donec ut interdum arcu. Integer et molestie velit, et auctor nisl. Praesent imperdiet pulvinar ante, gravida gravida ante. Duis eleifend, augue in sodales consectetur, tellus lectus rutrum sapien, ac dignissim est magna sed enim. Fusce egestas fringilla nisi, ac viverra tortor. Duis nisi turpis, sodales et consectetur id, sagittis quis purus."
    },
    {
        name: "Dark Forest",
        image: "//c1.staticflickr.com/7/6023/6009208011_14f3d176b4_b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada, nisl eget imperdiet egestas, metus eros porttitor urna, ac bibendum neque dui ac sem. Sed sodales suscipit ante sed rutrum. In ultricies felis et pretium dapibus. Curabitur non blandit nisi, id tincidunt sapien. Nulla feugiat dui pellentesque elit accumsan, faucibus finibus nulla hendrerit. Phasellus ut nulla ullamcorper, dapibus est sit amet, rhoncus orci. Donec ut interdum arcu. Integer et molestie velit, et auctor nisl. Praesent imperdiet pulvinar ante, gravida gravida ante. Duis eleifend, augue in sodales consectetur, tellus lectus rutrum sapien, ac dignissim est magna sed enim. Fusce egestas fringilla nisi, ac viverra tortor. Duis nisi turpis, sodales et consectetur id, sagittis quis purus."
    }
]


function seedDB(){
    //remove all campgrounds
    Campground.remove({},function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed Campground!");
        // data.forEach(function(seed){
        // Campground.create(seed,function(err,campground ){
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log("added a campground");
        //         Comment.create({
        //             text:"I want water there",
        //             author: "pirate"
        //         }, function(err,comment){
        //             if(err){
        //                 console.log(err);
        //             }else{
        //                 campground.comments.push(comment);
        //                 campground.save();
        //                 console.log("comment added!")
        //             }
        //         })
        //     }
        // })
    // });
       
    });
    // add a few campgrounds
    
}

 
module.exports = seedDB;
