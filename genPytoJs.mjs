// genPytoJs.mjs, by Anthony Maida and Daniel VanDenEykel
//

import fs from 'fs';
import {PythonShell} from "python-shell";
import date from "date-and-time";

let today = new Date();

// This function will check to see if the article's json data exists
// on the host machine.  If it doesn't, a Python Shell will run 'gen.py',
// which will create json data for the system based on Python code.
export function checkArticle() {
    let formatDate = date.format(today, 'MM_DD_YYYY'),
        path = `./archive/article_${formatDate}.json`;
    if (!fs.existsSync(path)) {
        PythonShell.run("main.py", null, function () {
            console.log("Generated Article");
        });
    }
}

// This function will do one of two things:
// If the jsonData argument is empty, it will load the data with
// the current date.  If the path doesn't exist, then it means that
// the article is still loading, so no data will be shown on the page.
// Otherwise, it will read the file and return a dictionary of the parsed data.
export function getBlogPost(jsonData) {
    let formatDate = date.format(today, 'MM_DD_YYYY'),
        article = `article_${formatDate}.json`
    if (jsonData !== null) {
        article = jsonData
    }
    const path = `./archive/${article}`;
    if (!fs.existsSync(path)) {
        return {article: "The article is still loading, please wait..."};
    } else {
        let rawData = fs.readFileSync(path);
        return JSON.parse(rawData);
    }
}
