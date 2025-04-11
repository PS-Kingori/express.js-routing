const express = require('express');
const router = express.Router();

//routes

router.get('/', (req, res)=>{
    res.send('api main route');
})



router.get('/users', (req, res)=>{
    res.send('List of users');
})

router.get('/users/:id', (req, res)=>{
    const userId = req.params.id;
    res.send(`Details of user ${userId}`);
})

router.post(`/users`, (req, res)=>{
    res.send(`Create new User`);
})

router.put(`/users/:id`, (req, res)=>{
    const userId = req.params.id;
    res.send(`Updated user ${userId}`);
})

router.delete(`/users/:id`, (req, res)=>{
    const userId = req.params.id
    res.send(`Delete User ${userId}`);
})

module.exports = router;