var express = require('express');
var router = express.Router();
/* GET Landing page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'My Favourite LooneyToons' });
});
/* GET People page. */
router.get('/people', function (req, res, next) {
    res.render('people', { title: 'People' });
});
/* GET Contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;
//# sourceMappingURL=index.js.map