const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

const getDb = () => client.connect().then(() => {
  const db = client.db('testdb')
  return db
})

const getTracks = () => 
  getDb()
  .then(db => db.collection('tracks'))
  .then(collection => collection.find())
  .then(cursor => cursor.toArray())


const insertTrack = (track) =>
  getDb()
  .then(db => db.collection('tracks'))
  .then(collection => collection.insertOne(track))

// insertTrack({
//   title: 'XYZ',
//   singer: 'XYZABC',
//   image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/03/radiohead_2000-620x394.jpg',
//   file: 'numbers.mp3'
// }).then(() => console.log("Done!"))


getTracks().then(tracks => console.log(tracks))

module.exports = {
  getTracks,
  insertTrack
}
