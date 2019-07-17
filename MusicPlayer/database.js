const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')


//to create a new database named testdb
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

module.exports = {
  getTracks,
  insertTrack
}
