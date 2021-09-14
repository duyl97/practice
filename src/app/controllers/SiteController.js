const Course = require('../models/Course');

class SiteController {

    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then(courses => res.render('home'))
            .catch(next);
    }

}

module.exports = new SiteController;