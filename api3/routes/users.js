const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    console.log("REUESTING IS WORKING REALLY FINE.");
})

module.exports  =  userRouter;