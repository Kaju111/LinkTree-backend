const User = require('../models/user')
const jwt_decode = require('jwt-decode')

const dashBoardData  = async (req, res) => {
    const {tokenMail} = req.body
    console.log(tokenMail)
    try {
        const decodedTokenMail = jwt_decode(tokenMail, process.env.SECRET_JWT)
        const email = decodedTokenMail.email
        console.log('decoded email', email)
        const user = await User.findOne({email: email})
        const userData = {
            name: user.name,
            role:user.role,
            avater: user.avater,
            handle: user.handle,
            links: user.links.length
        }
        return res.json({message: 'User loaded', userData, status:'Okay'})
    } catch (error) {
        return res.json({status: 'error', error: error.message})
    }
}

module.exports = {dashBoardData}