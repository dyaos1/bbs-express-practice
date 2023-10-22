var express = require('express');
var router = express.Router();

const pg = require("../DB_integeration/postgres")


// define article list here
router.get('/', async function(req, res) {
  const result = await pg.select_articles_all()
  res.send(result);
});

// param
router.param('id', (req, res, next, val) => {
  req.params.article_id = val
  next()
})

// define each article routes here
router
    .route('/:id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log(`router recognize: ${req.params.comment_id}`)
        next()
    })
    .get(function (req, res, next) {
        context={
          "article": `${req.params.article_id}`
        }
        res.json(context)
    })

module.exports = router;