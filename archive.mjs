import {listFiles} from "./genPytoJs.mjs";
import express from "express";

export default function archive() {
  const router = express.Router();

  router.get("/archive", function (req, res) {
    // Call the function to get the list of items
    let files = listFiles();
    console.log("Archive");
    res.render("archive", { file : files });
  });
  return router
}
