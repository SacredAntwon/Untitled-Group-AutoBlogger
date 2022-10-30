let {PythonShell} = require('python-shell')

PythonShell.run("gen.py",null,function(err,results){
    console.log(results)
})

console.log(results)
