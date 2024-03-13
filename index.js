const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

//CONNECT TO DATABASE
const connectDB = require("./config/connectDB")
connectDB()

//COOKIE PARSER
let cookieParser = require("cookie-parser")
app.use(cookieParser())

//USE CORS
let cors = require("cors")
app.use(cors({
    origin:['http://localhost:5173' , 'http://localhost:3000'],
    credentials: true
}))

//JSON MIDDLEWARE
app.use(express.json())

app.listen( PORT , () => {
    console.log(`Server running on PORT ${PORT}`)
})

const CategoryRoute = require("./routes/CategoryRoute")
app.use('/categories' , CategoryRoute)

const EmployeeRoute = require("./routes/EmployeeRoute")
app.use('/employees' , EmployeeRoute)

const ProjectRoute = require("./routes/ProjectRoute")
app.use('/projects' , ProjectRoute)

const AuthRoute = require("./routes/AuthRoute")
app.use('/users' , AuthRoute)

