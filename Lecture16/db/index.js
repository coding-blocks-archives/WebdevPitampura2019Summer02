const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

// client.connect().then(() =>{
//     console.log('Connected')
// }).catch(err =>{
//     console.log("Error" , err)
// })



const getDB = dbName =>
    client.connect()
    .then(() => client.db(dbName))
    .catch(err => console.log(err))


getDB('testDB').then(db =>{
    const
})