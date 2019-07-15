const Sequelize = require('sequelize')
const express = require('express')

const app = express()

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

// sequelize.authenticate().then(() =>{
//     console.log('connected')
// }).catch(err => {
//     console.log("not connected")
// })

//checks if the connection is successful, creates file if not present

const Bands = sequelize.define('bands' , {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    striked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
})

// nothing will happen if we call authenticate here.

// creates table if doesnt exist
// Bands.sync().then(()=>{
//     console.log("Created Bands")
// })




app.use(express.urlencoded({extended: true}))

const stringToBool = val => val == "true"

app.get('/', (req, res) => {
  const filter = req.query || {}
  if (typeof filter.striked != 'undefined') {
    filter.striked = stringToBool(filter.striked)
  }

  Bands.findAll({
    where: filter
  }).then(bands => {
    res.json(bands)
  })
})

app.patch        

app.post('/', (req, res) => {
  Bands.create({
    title: req.body.title
  }).then(band => {
    res.json(band)
   })
})

app.patch('/:id', (res, req) =>{
    Bands.update(req.body, {
        where: {
            id: req.params.id
        }

    }).then(() => {
        res.sendStatus(204)
    })
})


app.patch('/' , (req,res) =>{
    Bands.destroy({
        where: {
            striked: true
        }
    }).then(()=>{
        res.sendStatus(204)
    }).catch(err => {
        res.sendStatus(504)
    })
})



Bands.sync().then(() => {
  app.listen(3000)
  console.log('Running on 3000')
    })