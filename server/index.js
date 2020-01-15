const express = require('express')
const controller = require('./controller')
require('dotenv').config()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    
    
    app.listen(SERVER_PORT, ()=> {
        console.log(`Server is listening on port ${SERVER_PORT}`)
    })
})



const app = express()
app.use(express.json())


app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getById)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)
app.put('/api/products/:id', ctrl.update)


