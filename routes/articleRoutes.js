const express = require('express')
const router = express.Router()


const {
     getArticle , 
     setArticle,
     updateArticle,
     deleteArticle,
} = require('../controllers/articleController')


router.route('/').get( getArticle).post(setArticle)
router.route('/:id').delete(deleteArticle).put(updateArticle)

//.delete( deleteArticle).

module.exports = router