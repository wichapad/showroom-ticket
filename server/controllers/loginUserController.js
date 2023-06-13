const bcrypt = require('bcrypt')
const User = require('../models/Users')

exports.loginUser = (req, res) => {
    const { email, password } = req.body

    User.findOne({ email: email }).then((user) => {
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        //เปรียบเทียบ password ที่ให้ไว้ ที่ hash ไว้อยู่
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' })
            }
            if (result) {
                // password macth กัน
                return res.status(200).json({ error: "Login successfully" })
            } else {
                //password not match 
                return res.status(401).json({ error: "Invalid password" })
            }
        })
    }).catch((err)=>{
        return res.status(500).json({error: "Invalid server error"})
    })
}