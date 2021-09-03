const mongoose = require('./connection')

const User = require('../models/UserModel')
const userseeds = require('./seeds.json')


User.deleteMany({})
    .then(() => {
    return User.insertMany(userseeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })