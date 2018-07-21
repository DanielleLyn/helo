module.exports = {
    getUserData: (req, res) => {
        res.status(200).json({user: req.session.user});
        
    },
    // createPost: (req, res) => {
    //     if(req.params.userid) {
    //         const { userid } = req.session.user;
    //         const { imageurl, title, content } = req.body;
    //         const newPost = { imageurl, title, content }
    //        req.app.get('db').create_post(newPost)
    //         .then(posts => {
    //             res.status(200).json({createdPost: posts[0]});
    //         }).catch(err => console.log('error creating post', err));
    //     }
    // },
  
 }
