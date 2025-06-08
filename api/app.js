import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js' // note the .js extension!
import linkRoutes from './routes/linkRoute.js' // note the .js extension!

dotenv.config()

const app = express()
app.use(express.json()) // for parsing application/json

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { dbName: 'javavsdjango' })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Routes
app.use('/api/users', userRoutes)
app.use('/api/links', linkRoutes)
// Start Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
