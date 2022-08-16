import express  from "express"
import asyncHandler from "express-async-handler"
const router = express.Router()
import Product from '../models/productModel.js'

// @description to fetch all products
// @description to GET/api/products
// @access to Public

router.get('/', asyncHandler (async (req,res) =>{

    const products = await Product.find({})

    res.json(products)
})
)

// @description to fetch all single products
// @description to GET/api/products/:id
// @access to Public


router.get('/:id', asyncHandler (async (req,res) =>{
    const product =await Product.findById(req.params.id)

    if(product) {
    res.json(product)
    }else{
        res.status (404).json({ message: 'Product not found' })
    }
})
)



export default router
