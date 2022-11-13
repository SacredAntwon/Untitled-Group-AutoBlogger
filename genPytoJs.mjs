import fs from 'fs';
import {PythonShell} from "python-shell";
import date from "date-and-time";

let today = new Date();

export function checkArticle() {
    let formatDate = date.format(today, 'MM_DD_YYYY'),
        path = `./archive/article_${formatDate}.json`;
    if (!fs.existsSync(path)) {
        PythonShell.run("main.py", null, function () {
            console.log("Generated Article");
        });
    }
}

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
