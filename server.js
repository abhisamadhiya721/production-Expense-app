const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb')
const path = require('path')

dotenv.config();


connectDb();



const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

//transaction routes
app.use('/api/v1/transactions',require("./routes/transactionsRoutes"))

//static files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
//port
const PORT = 8080 || process.env.PORT;


app.listen(PORT,() => {
    console.log(`Server Running on port ${PORT}`);
});