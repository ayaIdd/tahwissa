const express = require('express')
const router = express.Router()
const {getArticle} = require('../controllers/articleController')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router