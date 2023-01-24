const router = require('express').Router()
const shorterController = require('../controller/shortUrl.controller') 

router.get('/',shorterController.getHome)
router.post('/shorturl', shorterController.postShorter)


router.get('/:shorturl', shorterController.getShortUrl)

module.exports = router