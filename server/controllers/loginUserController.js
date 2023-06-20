import React from 'react'
const userModel = require('../models/WebUser');
const jwt = require('jsonwebtoken')

const loginUserController = {
    login: async(req,res) => {
        try{
            const{email,password} = req.body;

            const user = await userModel.findOne({email});

            if(user){
                if(user.password === password && user.email === email){
                    const token = jwt.sign({userid: user._id},process.env.key)
                    res.status(200).json({user, token: token });
                    console.log("success")
                }
                else {
                    res.status(500).json({ error: 'Invalid password or email' });
                    console.log('Invalid password or email');
                }
            }
            else {
                res.status(500).json({ error: 'Invalid login' });
                console.log('Invalid login');
            }
        }
        catch (error) {
            console.log('Error: ', { error });
            res.status(500).json({ error: 'Failed to login user' });
        }
    }
}

module.exports = loginUserController;

