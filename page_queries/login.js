const models = require("./models");

module.exports = function login(req, res, next) {
  var user = models.user
    .findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
    .then(user => {
      if (user.password === req.body.password) {
        req.session.username = req.body.username;
        req.session.userId = user.dataValues.id;
        req.session.authenticated = true;
        res.redirect("/");
      }
    });
};
