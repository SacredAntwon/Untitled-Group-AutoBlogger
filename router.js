var express = require("express");

var router = express.Router();

const blogInfo = require('./genPytoJs');
console.log(blogInfo);

// router.get('', async(req,res) => {
//   res.render('index', { blog : blogInfo.author });
// });
router.get("/",function(req,res){
  console.log("Start page");
  res.render("index", { text : blogInfo.article });
});

module.exports = router;
