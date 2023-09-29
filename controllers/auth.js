const User = require('../models/user')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) =>{
    const { handle, email, password, category } =req.body;
    console.log(req.body)
    try {
        const defaultLink = {url: 'typefinance.com', title: 'TypeFinance.com', icon: ''}
        const user = await User.create({handle, email, password, role: category, links: [defaultLink]})
        const token = jwt.sign({email: email},process.evn.SECRET_JWT)
        return res.json({message: 'user created', status: 'success', 'token':token, id: user._id}) 
    } catch (error) {
        if(error.code === '11000'){
            return res.json({message: 'Try different handle or email', status: 'error'})
        }
        return res.json({message: error.message, status: 'error',}) 
    }  
}

const loginUser = (req, res) =>{
    res.send(`login from callback`)
}

module.exports = {registerUser, loginUser}
