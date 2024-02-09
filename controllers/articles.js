const db = require('../utils/db')

const getAllArticles = (req, res) => {
    let sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        res.render('index', {
            articles: result
        })
    })
} 

const getArticleBySlug = (req, res) => {
    let sql = `SELECT * FROM article WHERE slug="${req.params.slug}"`
    db.query(sql, (error, result) => {
        let author_id = result[0].author_id
        let article = result[0] 
        let sql = `SELECT * FROM author WHERE id='${author_id}'` 
        db.query(sql, (error, result) => {
            let author = result[0]
            article['author_name'] = author.name
            res.render('article', {
                article: article
            })  
        })  
    })
} 

const getArticlesByAuthor = (req, res) => {
    let sql = `SELECT * FROM article WHERE author_id = ${req.params.author_id}`
    db.query(sql, (error, result) => {
        let author_articles = result
        let sql = `SELECT * FROM author WHERE id = ${req.params.author_id}`
            db.query(sql, (error, result) => { 
                let author = result
                res.render('author', {
                    author: author,
                    author_articles: author_articles
                })
            }) 
    })
} 

module.exports = {
    getAllArticles,
    getArticleBySlug,
    getArticlesByAuthor
} 