const fs = require('fs');

// async
// fs.writeFile()
// fs.readFile()
// fs.unlink()

// sync
// fs.writeFileSync();
// fs.readFileSync()
// fs.unlinkSync()

const content = "Node Application"
// fs.writeFileSync('test.json',JSON.stringify(content))

fs.writeFile('test.txt',content, {flag:'a+'}, err=> {
    if(err){
        console.log(err);
        return 
    }
    console.log("succesfully done!")
})