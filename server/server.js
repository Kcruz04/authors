const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}))

require('./config/mongoose.config')

//Option 1
const Routes = require('./routes/component.routes')
Routes(app)

//Option 2
// require('./routes/component.routes')(app);

app.listen(port, () =>{
    console.log(`We are locked and loaded on port: ${port}`)
})