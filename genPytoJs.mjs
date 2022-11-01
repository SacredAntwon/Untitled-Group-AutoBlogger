import fs from 'fs';
import {PythonShell} from "python-shell";

let date = new Date();
let formatDate = date.toLocaleDateString().replace(new RegExp('/', 'g'), '_');

export function checkArticle() {
    let path = `./archive/article_${formatDate}.json`;

    if (!fs.existsSync(path)) {
        PythonShell.run("gen.py", null, function () {
            console.log("Generated Article");
        });
    }
}

export function getBlogPost() {
    let path = `./archive/article_${formatDate}.json`;
    if (!fs.existsSync(path)) {
        return {article: "The article is still loading, please wait..."};
    } else {
        let rawData = fs.readFileSync(path);
        return JSON.parse(rawData);
    }
}

