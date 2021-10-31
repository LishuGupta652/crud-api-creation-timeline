const express  = require('express');
const cors = require('cors');
const User = require('./config');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post('/create', async(req, res) =>{
    const data = req.body
    console.log("Data of users ", data);
    await User.add(data);
    res.send({msg: "User Added"});
})

app.listen(5000, () => console.log(`Live on https://localhost:5000`))