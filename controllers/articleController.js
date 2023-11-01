const asyncHandler = require('express-async-handler')
const Article = require('../models/articleModel')

const getArticle = asyncHandler(async (req, res) => {
    const articles = await Article.find({ })
  
    res.status(200).json(articles)
  })
  
 
const setArticle = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.content || !req.body.author_name) {
      res.status(400)
      throw new Error('Please provide title, content, and author_name')
    }
  
    
    const article = await Article.create({
        title: req.body.title,
        content: req.body.content,
        author_name: req.body.author_name,
    })
  
    res.status(200).json(article)
  })

const updateArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)
  
    if (!article) {
      res.status(400)
      throw new Error('Article not found')
    }
  
  
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedArticle)
  })  

const deleteArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)
  
    if (!article) {
      res.status(400)
      throw new Error('article not found')
    }
  
    await Article.deleteOne(article)
  
    res.status(200).json({ id: req.params.id })


  })
  
module.exports = {
    getArticle,
    setArticle,
    updateArticle,
    deleteArticle,
}