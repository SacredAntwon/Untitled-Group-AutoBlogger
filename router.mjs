// router.mjs, by Anthony Maida and Daniel VanDenEykel
//
// It will enter checkArticle() and getBlogPost()

import {checkArticle, getBlogPost} from "./genPytoJs.mjs";
import express from "express";

// This function runs when the router starts or when an article loads.
// It will first check if the json data exists based on the archive date.
export default function startRouter() {
  const router = express.Router();
  checkArticle();

  router.get("/", function (req, res) {
    let jsonData = null
    if (Object.keys(req.query).length !== 0 && typeof req.query.post != 'undefined') {
      console.log(`User queried post from: ${req.query.post}`)
      jsonData = req.query.post
    }
    if (jsonData === null) {
      // If page file gets removed while the website is up, it
      // will generate another one.
      checkArticle();
    }

    // Get the blog post information
    let blogInfo = getBlogPost(jsonData);
    
    console.log("Start page");
    res.render("index", { blog : blogInfo, picture : blogInfo.image });
  });
  return router
}
