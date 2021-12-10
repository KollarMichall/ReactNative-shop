const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

require('dotenv/config')

app.use(express.json())
app.use(cors())
app.options('*', cors())


//Routes
const categoriesRouters = require('./routers/categories')
const productsRouters = require('./routers/products')
const usersRouters = require('./routers/users')
const ordersRouters = require('./routers/users')

const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRouters)
app.use(`${api}/products`, productsRouters)
app.use(`${api}/users`, usersRouters)
app.use(`${api}/orders`, ordersRouters)


// Database
mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log('Database is ready');
})
.catch((err) => {
    console.log(err);
})

//Server
app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
})