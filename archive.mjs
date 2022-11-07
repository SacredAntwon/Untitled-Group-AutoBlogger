import express from "express";
import fs from "fs";

export function archive() {
    const router = express.Router();

    router.get("/archive", function (req, res) {
        // Call the function to get the list of items
        let files = listFiles();
        console.log("Archive");
        res.render("archive", {file: files});
    });
    return router
}

// This will grab the list of files names from 'archive'
export function listFiles() {
    const files = fs.readdirSync('./archive');
    const index = files.indexOf('.DS_Store');
    // Removes DS_Store from the list
    if (index > -1) {
        files.splice(index, 1);
    }
    return files;
}
