const router = require('express').Router();
let redAlert = require('../models/redalert.model');

router.route('/').get((req, res) => {
  redAlert.find()
    .then(redAlert => res.json(redAlert))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Id = Number(req.body.Id);
  const Phone = Number(req.body.Phone);
  const Address = req.body.Address;
  const City = req.body.City;
  const AmountofWounded = Number(req.body.AmountofWounded);
  const ReadingDescription = req.body.ReadingDescription;
  const Police = Boolean(req.body.Police);
  const Mada = Boolean(req.body.Mada);
  const Firefighters = Boolean(req.body.Firefighters);
  const Hfc = Boolean(req.body.Hfc);
  const StatusOpen = Boolean(req.body.StatusOpen);
  const StatusClose = Boolean(req.body.StatusClose);
  const Statustreatment = Boolean(req.body.Statustreatment);
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const LongText = req.body.LongText;


  const newCall = new redAlert({
    FirstName, LastName, Id, Phone, Address, City, AmountofWounded, ReadingDescription, Police, Mada, Firefighters, Hfc,
    StatusOpen, StatusClose, Statustreatment, latitude, longitude, LongText
  });

  newCall.save()
    .then(() => res.json('redalert added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/:id').get((req, res) => {
  redAlert.findById(req.params.id)
    .then(redalert => res.json(redalert))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  redAlert.findByIdAndDelete(req.params.id)
    .then(() => res.json('redAlert deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  redAlert.findById(req.params.id)
    .then(redalert => {
      redalert.FirstName = req.body.FirstName;
      redalert.LastName = req.body.LastName;
      redalert.Id = Number(req.body.Id);
      redalert.Phone = Number(req.body.Phone);
      redalert.Address = req.body.Address;
      redalert.City = req.body.City;
      redalert.AmountofWounded = Number(req.body.AmountofWounded);
      redalert.ReadingDescription = req.body.ReadingDescription;
      redalert.Police = Boolean(req.body.Police);
      redalert.Mada = Boolean(req.body.Mada);
      redalert.Firefighters = Boolean(req.body.Firefighters);
      redalert.Hfc = Boolean(req.body.Hfc);
      redalert.StatusOpen = Boolean(req.body.StatusOpen);
      redalert.StatusClose = Boolean(req.body.StatusClose);
      redalert.Statustreatment = Boolean(req.body.Statustreatment);
      redalert.LongText = req.body.LongText;

      redalert.save()
        .then(() => res.json('RedAlert updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;