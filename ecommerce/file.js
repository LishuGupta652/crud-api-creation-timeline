const fs = require('fs');
// async
fs.readFile('test.txt', 'utf-8', (err, data)=> {
    if(err) throw err;
    console.log(data);
});

// sync
const data= fs.readFileSync("test.txt",{encoding:'utf-8', flag:'r'});
console.log(data);


fs.stat("test.txt", (err,stats) => {
    if (err) throw err;
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    // console.log(stats.isSymoblicLink())
    console.log(stats.size)
})
