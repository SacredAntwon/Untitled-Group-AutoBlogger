import {checkArticle, getBlogPost} from "./genPytoJs.mjs";
import express from "express";

export default function startRouter() {
  const router = express.Router();
  checkArticle();

  router.get("/", function (req, res) {
    let blogInfo = getBlogPost();
    console.log("Start page");
    res.render("index", { blog : blogInfo, picture : blogInfo.image });
  });
  return router
}
