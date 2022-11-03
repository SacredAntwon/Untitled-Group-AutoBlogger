import fs from 'fs';
import {PythonShell} from "python-shell";
import date from "date-and-time";

let today = new Date(),
    formatDate = date.format(today, 'MM_DD_YYYY');
let path = `./archive/article_${formatDate}.json`;


export function checkArticle() {
    if (!fs.existsSync(path)) {
        PythonShell.run("gen.py", null, function () {
            console.log("Generated Article");
        });
    }
}

export function getBlogPost() {
    if (!fs.existsSync(path)) {
        return {article: "The article is still loading, please wait..."};
    } else {
        let rawData = fs.readFileSync(path);
        return JSON.parse(rawData);
    }
}
