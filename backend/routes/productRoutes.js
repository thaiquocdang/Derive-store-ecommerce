import express from 'express'
import { getProductById, getProducts } from '../controllers/productController.js'

const router = express.Router()

//get all products
router.route('/').get(getProducts) // equal to router.get('/', getProducts())

//get each product by ID
router.route('/:id').get(getProductById)

export default router