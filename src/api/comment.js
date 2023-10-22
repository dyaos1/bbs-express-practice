var express = require('express');
var router = express.Router();


// define article list here
router.get('/', function(req, res) {
  res.send('comment here');
});

// define each article routes here
router
    .route('/:comment_id')
    .all(function (req, res, next) {
        console.log(`{:comment_id}`)
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        next()
    })
    .get(function (req, res, next) {
        context = {
            "comment_id": ":comment_id"
        }
        res.json(context)
    })

module.exports = router;