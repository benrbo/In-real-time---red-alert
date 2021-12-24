const router = require('express').Router();
let audiored = require('../models/audiored.model');

router.route('/').get((req, res) => {
  audiored.find()
    .then(audiored => res.json(audiored))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const blobURL = req.body.blobURL;
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

  const newAudioCall = new audiored({ blobURL, Police, Mada, Firefighters, Hfc, StatusOpen, StatusClose, Statustreatment, latitude, longitude, LongText });

  newAudioCall.save()
    .then(() => res.json('redalert audio added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  audiored.findById(req.params.id)
    .then(audiored => res.json(audiored))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  audiored.findByIdAndDelete(req.params.id)
    .then(() => res.json('audiored deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  audiored.findById(req.params.id)
    .then(audioreds => {
      audioreds.blobURL = req.body.blobURL;
      audioreds.Police = Boolean(req.body.Police);
      audioreds.Mada = Boolean(req.body.Mada);
      audioreds.Firefighters = Boolean(req.body.Firefighters);
      audioreds.Hfc = Boolean(req.body.Hfc);
      audioreds.StatusOpen = Boolean(req.body.StatusOpen);
      audioreds.StatusClose = Boolean(req.body.StatusClose);
      audioreds.Statustreatment = Boolean(req.body.Statustreatment);
      audioreds.LongText = req.body.LongText;

      audioreds.save()
        .then(() => res.json('RedAlert updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;