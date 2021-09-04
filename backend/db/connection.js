const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://jexxe:Cherokee01@cluster0.ja5th.mongodb.net/bugtracker'

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((instance) => console.log(`connected to db: ${instance.connections[0].name}`))
    .catch((error) => console.log(`Error: ${error}`))

    module.exports = mongoose;