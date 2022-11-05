import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
import startRouter from "./router.mjs";
import archive from "./archive.mjs";

const app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set("port", process.env.PORT || 3000);

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

let router = startRouter()
let archives = archive()

app.use(router);
app.use(archives);

app.listen(app.get("port"),function(){
  console.log("Server started on port " + app.get("port"))
});
