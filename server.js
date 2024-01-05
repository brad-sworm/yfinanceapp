



const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))
app.use('/', indexRouter)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


app.listen(process.env.PORT || 3000)