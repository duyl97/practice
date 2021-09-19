const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                //handlebars issue workaround: using multipleMongooseToObject
                courses = multipleMongooseToObject(courses);
                res.render('home', { courses })
            })
            .catch(next);
    }

}

module.exports = new SiteController;