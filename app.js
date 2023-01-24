const express = require('express')
const bodyParser = require('body-parser')
const homeRoter = require('./routes/shortUrl.route')

const app = express()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:false}))

app.use('/',homeRoter)
app.use('/shorturl',homeRoter)


app.use('/:shorturl',homeRoter)

app.listen(process.env.PORT || 3000);
