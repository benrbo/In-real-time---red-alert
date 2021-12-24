const router = require('express').Router();
let user = require('../models/user.model');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.route("/", (req, res, next) => {
  try {
    if (req.path === "/login" || req.path === "/register" || req.path === "/") {
      next();
    } else {
      /* decode jwt token if authorized*/
      jwt.verify(req.headers.token, 'shhhhh11111', function (err, decoded) {
        if (decoded && decoded.user) {
          req.user = decoded;
          next();
        } else {
          return res.status(401).json({
            errorMessage: 'משתמש לא מורשה!',
            status: false
          });
        }
      })
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'משהו השתבש!',
      status: false
    });
  }
})

router.route('/').get((req, res) => {
  res.status(200).json({
    status: true,
    title: 'Apis'
  });
});

router.route('/login').post((req, res) => {
  try {
    if (req.body && req.body.username && req.body.password) {
      user.find({ username: req.body.username }, (err, data) => {
        if (data.length > 0) {

          if (bcrypt.compareSync(data[0].password, req.body.password)) {
            checkUserAndGenerateToken(data[0], req, res);


          } else {

            res.status(400).json({
              errorMessage: 'שם המשתמש או הסיסמה שגויים!',
              status: false
            });
          }

        } else {
          res.status(400).json({
            errorMessage: 'שם המשתמש או הסיסמה שגויים!',
            status: false
          });
        }
      })
    } else {
      res.status(400).json({
        errorMessage: 'הוסף קודם פרמטר מתאים!',
        status: false
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'משהו השתבש!',
      status: false
    });
  }

});

router.route('/register').post((req, res) => {
  try {
    if (req.body && req.body.username && req.body.password) {

      user.find({ username: req.body.username }, (err, data) => {

        if (data.length === 0) {
          let User = new user({
            username: req.body.username,
            password: req.body.password
          });
          User.save((err, data) => {
            if (err) {
              res.status(400).json({
                errorMessage: err,
                status: false
              });
            } else {
              res.status(200).json({
                status: true,
                title: 'נרשם בהצלחה.'
              });
            }
          });

        } else {
          res.status(400).json({
            errorMessage: `שם המשתמש ${req.body.username} כבר קיים!`,
            status: false
          });
        }

      });

    } else {
      res.status(400).json({
        errorMessage: 'הוסף פרמטר מתאים!',
        status: false
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'משהו השתבש!',
      status: false
    });
  }
});

function checkUserAndGenerateToken(data, _req, res) {
  jwt.sign({ user: data.username, id: data._id }, 'shhhhh11111', { expiresIn: '180d' }, (err, token) => {
    if (err) {
      res.status(400).json({
        status: false,
        errorMessage: err,
      });
    } else {
      res.json({
        message: 'התחברת בהצלחה.',
        token: token,
        status: true
      });
    }
  });
}



module.exports = router;