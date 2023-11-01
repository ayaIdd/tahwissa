const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config();
const connectDB = require('./config/database')
const PORT = process.env.PORT || 6001;
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))



app.listen(PORT ,()=>{console.log(`server on port ${PORT}`)})
app.use('/api/articles' , require('./routes/articleRoutes'))

app.use(errorHandler)

