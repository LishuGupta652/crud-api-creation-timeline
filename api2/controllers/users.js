import {v4 as uuidv4 } from 'uuid';

export const getUsers = (req, res) => {
    res.send(users);
}
export const createUser = (req,res) => {
    const user = req.body;
    const userId = uuidv4();
    
    users.push({...user, id:uuidv4()});
    // users.push 
    res.send(`USER WITH NAME ${user.firstname} added to the database!`); 
}
export const deleteUser = (req, res) => {
    const {id } = req.params;

    users = users.filter(user => user.id !== id);
    res.send(`user with the id ${id} deleted form the database `)
}
export const updateUser = (req, res) => {
    const {id } = req.params;
    const {firstname, lastname, age} = req.body;
    
    const user = users.find(user=> user.id === id);

    if (firstname) {
        user.firstname =firstname
    }
    if(lastname) {
        user.lastname = lastname
    }
    if(age) {
        user.age = age
    }
    res.send(`user with the id ${id } updated `);
}
export const getUser = (req,res) => {
    const {id } = req.params;
    const foundUser = users.find(user => user.id == id);


    res.send(foundUser);
};

