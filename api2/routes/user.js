import express from 'express';

const router = express.Router();

const users = [
    {
    firstname : "lishu",
    lastname: "gupta",
    age: "25",
},   {
    firstname : "xyz",
    lastname: "gupta",
    age: "28",
}
]

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req,res) => {
    console.log('router reached');
    console.log(req.body);
    // users.push 
    res.send('post route reached'); 
})

export default router;