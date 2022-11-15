// archive.mjs, by Anthony Maida and Daniel VanDenEykel
//

import express from "express";
import fs from "fs";

// The archive starts here, where when the page loads, it will list
// all the available files found, then render a button for each of them.
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

// This function will grab the list of files names from the 'archive' folder.
export function listFiles() {
    const files = fs.readdirSync('./archive');
    const index = files.indexOf('.DS_Store');
    // Removes DS_Store from the list
    if (index > -1) {
        files.splice(index, 1);
    }
    return files;
}
