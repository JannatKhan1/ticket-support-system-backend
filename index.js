const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//Connect to database
connectDB()
const app = express()
const cors = require("cors")

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions))

//Routes
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/tickets',require('./routes/ticketRoutes'))
app.use('/api/admin',require('./routes/adminRoutes'))

app.use('/api/data',require('./routes/dataRoutes'))

app.use(errorHandler)

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))