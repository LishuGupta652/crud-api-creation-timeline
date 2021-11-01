import express from 'express';
import {createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js';
const router = express.Router();

let users = [
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
// req.body
// req.params
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id',getUser)

router.delete("/:id",deleteUser)

router.patch(':/id',updateUser)

export default router;