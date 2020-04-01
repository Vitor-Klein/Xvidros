const express = require("express")

const LojaController = require('./controllers/LojaController')
const ProductController = require('./controllers/ProductController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/lojas', LojaController.index)
routes.post('/lojas', LojaController.create)

routes.get('/profile', ProfileController.index)

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.create)
routes.delete('/products/:id', ProductController.delete)

module.exports = routes
