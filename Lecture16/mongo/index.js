const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

const getDB = dbName =>
  client.connect()
    .then(() => client.db(dbName))
    .catch(err => console.log(err))

/*
  Insert Documents
*/

// getDB('testdb').then(db => {
//   const users = db.collection('users')

//   users.insertOne({
//     name: 'Sakshi',
//     bands: ['Ciggratettes After Sex']
//   }).then(result => {
//     console.log("Inserted", result)
//   })
// })

/*
  Query
*/

// setPagination (cursor, page) {
//   cursor.skip((page-1)* 10).limit(10)
// }

// getDB('testdb').then(db => {
//   const users = db.collection('users')

//   const cursor = users.find()

//   setPagination (cursor, req.query.page) // cursor.skip(page)

//   cursor.skip(1).limit(1)
  
//   cursor.toArray().then(console.log)

// })


// getDB('testdb').then(db => {
//   const users = db.collection('users')

//   const cursor = users.find({
//     bands: {
//       $in: ['Nirvana']
//     },
//     age: {
//       $gt: 25
//     }
//   })

//   cursor.toArray().then(console.log)

// })


