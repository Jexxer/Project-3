const mongoose = require('mongoose')

const mongoURI = 
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : 'mongodb://localhost/bugtracker'

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((instance) => console.log(`connected to db: ${instance.connections[0].name}`))
    .catch((error) => console.log(`Error: ${error}`))

    module.exports = mongoose;