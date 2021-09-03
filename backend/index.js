const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* Start Controllers Here */
const usersController = require('') // add users controller path './controllers/FILE_NAME'
app.use('/api/users', usersController)
/* End Controllers Here */

app.set('port', 8000)

app.listen(app.get('port'), () => {
    console.log(`Listening on PORT: ${app.get('port')}`)
})
