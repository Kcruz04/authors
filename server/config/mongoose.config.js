// Establish a connection to DB
const mongoose = require('mongoose')

const dbname = process.env.ATLAS_DATABASE
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${pw}@cluster4.lsbwrmo.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Package secured for our DB : ${dbname}`))
.catch((err) => console.log('Got tripped up on mongoose connection :',err))
