let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Contact Model
let contactSchema = require('../models/Contact');

// CREATE contact
router.route('/create-contact').post((req, res, next) => {
  contactSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Contact
router.route('/').get((req, res) => {
  contactSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Contact
router.route('/edit-contact/:id').get((req, res) => {
  contactSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Contact
router.route('/update-contact/:id').put((req, res, next) => {
  contactSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('contact updated successfully !')
    }
  })
})

// Delete contact
router.route('/delete-contact/:id').delete((req, res, next) => {
  contactSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;