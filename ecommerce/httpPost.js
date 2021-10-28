const http = require('https');
const axios = require('axios');

const data= JSON.stringify({
    name: "john",
    job: "full stack web developer"
})

const options = {
    hostname: "reqres.in",
    path: "/api/user",
    method: "POST", 
    header : {
        'Content-Type':"application/json"
    }
}
// const req=  http.request(options, (res) => {
//     let data ="";
//     console.log("Status Code: ", res.statusCode)

//     res.on("data", (chunk) => {
// data+= chunk;
//     })
//     res.on('end', () => {
//         console.log('Body: ', JSON.parse(data));
//     })
// })

// req.write(data)
// req.end()


// axios
axios.post('https://reqres.in/api/users', data).then(res=> {
        console.log(`status code :${res.status}`)
        console.log(`data  :${JSON.stringify(res.data)}`)
}).catch((err) => {
    console.log(err)
})