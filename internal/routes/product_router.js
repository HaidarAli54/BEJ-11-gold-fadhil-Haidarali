
const ProductController = require ('../controller/Product_controller')
const router = require ('express').Router()

const productController = new ProductController()

//router product
router.post('/api/product',productController.createProduct)
// router read Product
router.get('/api/product',productController.readProduct)

module.exports = router