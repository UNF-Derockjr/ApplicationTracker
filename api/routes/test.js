var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(express.json());
router.post('/', function (req, res, next) {
    res.send("Successful");
    console.log(req.body);
});
router.get('/', function (req, res, next) {
    res.send("Hello");
});

module.exports = router;
