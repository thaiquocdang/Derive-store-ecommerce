// const express = require('express')
// const products = require('./data/products.js')
// const dotenv = require('dotenv')
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config();

connectDB(); 

const app = express();

app.get('/', (req, res) => {
  res.send('API is running.....')
})

app.use('/api/products', productRoutes)//anything relates to /api/products will be linked to productRoutes

app.use(notFound)

//error middleware -> get error message as below instead of http format
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))