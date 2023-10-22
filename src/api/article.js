var express = require('express');
var router = express.Router();



// define article list here
router.get('/', function(req, res) {
  res.send('ArticleList here');
});

// define each article routes here
router
    .route('/:id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        next()
    })
    .get(function (req, res, next) {
        context={
          "article": "article_id"
        }
        res.json(context)
    })

module.exports = router;