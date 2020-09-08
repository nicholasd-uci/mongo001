const mongojs = require('mongojs')
const db = mongojs('favorite_db')

// FIND
// db.songs.find({song1: 'My girls'}, (err, data) => {
//     if (err) { console.log(err) }
//     console.log(data)
// })

// INSERT
// db.songs.insert({ songs2: 'Hell on Wheels'} => {
//     if (err) {console.log }
//     console.log(Data)
// })

// UPDATE
// db.songs.update({ songs2: 'My Girls' }, {$set: { songs2: 'No more girl'} }, (err, data) => {
//     if (err) { console.log(err) }
//     console.log(data)
// })

// REMOVE
// db.dogs.remove({ name: 'Gertrude' }, (err, data) => {
//   if (err) { console.log(err) }
//   console.log(data)
// })

