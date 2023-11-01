const getArticle = (req,res) => {
    res.status(200).json({message: 'your articles waaaaay my first ever api'})

}

module.exports = {
    getArticle,
}