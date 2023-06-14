//รับข้อมูล เพิ่มลง Database
const Users = require('../models/Users')

exports.storeUser = (req, res) => {
    const { email, username, password } = req.body

    //check validate data
    if (!email) {
        return res.status(400).json({ error: "Please enter an email" })
    } if (!username) {
        return res.status(400).json({ error: "Please enter an username" })
    } if (!password) {
        return res.status(400).json({ error: "Please enter an password" })
    }

    //save data
    Users.create({ email, username, password })
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(400).json({ error: "Users available" })
        })
}