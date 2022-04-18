const router = require("express").Router();
const Post = require("../model/post");
router.post("/newPost", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const newPost = new Post({
    title,
    description,
  });

  const savePoint = await newPost.save();
  res.json(savePoint);
});

router.get("/getPosts", async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

router.get("/getPost/:postid", async (req, res) => {
  const post = await Post.findById(req.params.postid);
  res.json(post);
});
/*
patch 
post
put

all threee are possible function to perform the updated request:

*/
router.put("/edit/:postId", async (req, res) => {
  const _id = req.params.postId;
  const update = await Post.findByIdAndUpdate(_id, {
    $set: { description: req.body.description },
  });
  res.json(update);
});

//remove a post by id
router.delete("/delete/:postid", async (req, res) => {
  const id = req.params.postid;
  await Post.remove({ _id: id });
  res.json({ status: "posot removed" });
});

module.exports = router;
