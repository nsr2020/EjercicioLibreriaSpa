require("dotenv").config()
const express = require("express")
const { connectDB } = require("./src/config/db")
const librosRouter = require("./src/api/routes/libros")
const usersRouter = require("./src/api/routes/users")
const cors = require("cors")

const app = express()


connectDB()

app.use(cors())

app.use(express.json())

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/libros", librosRouter)

app.use("*", (req, res, next) =>{
    return res.status(404).json("Route not found")
})

app.listen(3000, () =>{
    console.log("Servidor levantado en http:localhost:3000");
})