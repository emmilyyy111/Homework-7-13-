const express = require('express')
const cors = require('cors')
const { getEvents, addNewEvent, deleteEvent, getOneEvent } = require('./src/events')

const app = express()
app.use(cors())

app.get('/events', getOneEvent)
app.delete('/events', deleteEvent)
app.post('/events', addNewEvent)
app.get('/events', getEvents)

app.get('/', (req, res) => {
    res.send('this is our first get, getit ? ')
})


app.listen(5000, () => {
    console.log('We are connected on port 5000')
})