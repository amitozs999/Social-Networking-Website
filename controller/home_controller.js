const Post = require('../models/post');
const User = require('../models/user');

// module.exports.home = function(req, res){




//     // populate the user of each post
//     Post.find({}).populate('user').populate({
//         path: 'comments',
//         populate: {
//             path: 'user'
//         }
//     }).exec(function(err, posts){

//         User.find({}, function(err, user){
//             return res.render('home', {
//                 title: "Codeial | Home",
//                 posts:  posts,
//                 all_users: user
//             });
//         });

       
//     })


           
module.exports.home = async function(req, res){

    try{
         // populate the user of each post
        let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }, 
            populate: {
                path: 'likes'   //populate the likes of each comment
            }
        }).populate('likes');  //populate the likes of each post
    
        let users = await User.find({});

        return res.render('home', {
            title: "Codeial | Home",
            posts:  posts,
            all_users: users
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}

  
   
// }