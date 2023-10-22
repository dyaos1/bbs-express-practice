var express = require('express');
var router = express.Router();


// define article list here
router.get('/', function(req, res) {
  res.send('comment here');
});

// param
router.param('id', (req, res, next, val) => {
    req.params.comment_id = val
    next()
})

// define each article routes here
router
    .route('/:comment_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log(`router recognize: ${req.params.comment_id}`)
        next()
    })
    .get(function (req, res, next) {
        context = {
            "comment_id": `${req.params.comment_id}`
        }
        res.json(context)
    })

module.exports = router;