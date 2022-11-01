let {PythonShell} = require('python-shell');
const fs = require('fs');

PythonShell.run("gen.py",null,function(err,results){
    console.log("Generated Article");
});

// const fs = require('fs');
// function jsonReader(filePath, cb) {
//     fs.readFile(filePath, (err, fileData) => {
//         if (err) {
//             return cb && cb(err);
//         }
//         try {
//             const object = JSON.parse(fileData);
//             return cb && cb(null, object);
//         } catch(err) {
//             return cb && cb(err);
//         }
//     })
// }
// jsonReader('./archive/article_2022-10-31.json', (err, blogInfo) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(blogInfo); // => "Infinity Loop Drive"
//     module.exports = { blogInfo : 'blogInfo' };
// })

let rawdata = fs.readFileSync('./archive/article_2022-11-01.json');
let blogInfo = JSON.parse(rawdata);
//console.log(blogInfo);


module.exports = blogInfo;
