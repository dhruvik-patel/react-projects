import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

const app = express()
dotenv.config()

app.use(express.json({limit : "30mb"}))
app.use(express.urlencoded({ limit: "30mb" }))
app.use(cors())

// routes
app.use('/posts', postRoutes)

// Database Connection
// const CONNECTION_URL = "mongodb+srv://dhruvik:nodetest@dhruvik0.axest.mongodb.net/PostMessages?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`) ))
    .catch((err) => console.log(err))