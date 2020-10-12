import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

//@desc Fetch all products
//@route GET /api/products
//@access Public (everyone can access) --- another is Private (when login)
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({}) //empty object to return everything
  res.status(401)
  throw new Error('Not Authorized')
  res.json(products)
}))



//@desc Fetch single product
//@route GET /api/products/:id
//@access Public 
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(product){
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found') //using when we have errorhandler
  }
}))

export default router