const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Db Config

const db = require('./config/keys').mongoURI

// Api

const users = require('./config/api/users')

// Mongo connection

mongoose.connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDb Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello!!'))

// User routes

app.use('/api/users', users)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))