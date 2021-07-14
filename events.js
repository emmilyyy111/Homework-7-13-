const firebase = require('firebase-admin')
const credentials = require('../credentials.json')

function connectDb(){
    firebase.initializeApp({
        credential: firebase.credential.cert(credentials)
    })

    return firebase.firestore()
}

exports.getEvents = (req, res) => {
   const db = connectDb()
    const { event }
   db.collection('events').doc.event
    .get()
    .then(allEvents => {
        allEvents.docs.map(doc => {
            console.log(doc.data()
        res.send('got all events'))
        })
    })
    .catch(err => console.log(err))
}


// homework
// 1. create POST request - to add new events
exports.addNewEvent = (req, res) => {
        const db = connectDb()

        db.collection('events')
        .add({bodyParser.json(req.body)})
        .then(newEvent => res.status(newEvent)
      .catch(err => res.status(500).send('Event could not be created'))
    }
????????
// 2. create GET - ONE event request
exports.getOneEvent = (req, res) => {
    const db = connectDb()
    const { getEvent }
    db.collection('events') = req.params
    .get()
    .then(() => )
    .catch(err => console.log(err))

}
// 3. create DELETE request - to delete one event
exports.deleteEvent = (req, res) => {
    const db = connectDb()
    const { thisEvent } = req.params
    db.collection('events').doc(thisEvent).delete()
    .then(() => res.status(200).send ('Event deleted'))
    .catch(err => console.log(err))   
}
// 4. create patch request - to update one event
exports.addNewEvent = (req, res) => {
    const db = connectDb()

    db.collection('events')
    .post({
        name: 'Tennis Lesson',
        paying: 'Joe M.',
        time: '7:00pm',
        where: 'Tennis Courts'
    })
    .then(newEvent => res.status(newEvent)
  .catch(err => res.status(500).send('Event could not be created'))
}

// extra credit:
// Make a SEARCH request - to find one event 

// MAKE IT DYNAMIC IN POSTMAN

