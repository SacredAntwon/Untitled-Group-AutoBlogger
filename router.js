var express = require("express");

var router = express.Router();

const blogInfo = require('./genPytoJs');

router.get("/",function(req,res){
  console.log("Start page");
  res.render("index", { text : blogInfo.article });
});

module.exports = router;
