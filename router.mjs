import {checkArticle, getBlogPost} from "./genPytoJs.mjs";
import express from "express";

export default function startRouter() {
  const router = express.Router();
  checkArticle();

  router.get("/", function (req, res) {
    // If page file gets removed while the website is up, it
    // will generate another one.
    checkArticle();

    // Get the blog post information
    let blogInfo = getBlogPost();
    
    console.log("Start page");
    res.render("index", { blog : blogInfo, picture : blogInfo.image });
  });
  return router
}
