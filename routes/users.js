var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.sendFile(path.resolve(__dirname, '../views/users.html'));
    } else {
        res.json("You are not Authenticated");
    }
});

router.get('/searchUsers', function(req, res, next){
    if (req.user.username == "BrianA") {
        if (req.isAuthenticated()) {
            Users.find({}, "username firstName lastName email", function (err, Users) {
                res.json(Users);
            });

        } else {
            res.json("Access Denied");
        }
    } else {
        if (req.isAuthenticated()) {
            Users.find({username: new RegExp(req.user.username, "i")}, "username firstName lastName email", function (err, Users) {
                res.json(Users);
            });

        } else {
            res.json("Access Denied");
        }
    }
});

module.exports = router;
