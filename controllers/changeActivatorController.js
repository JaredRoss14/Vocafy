const db = require("../models");

// Defining methods for the changeActivatorController
module.exports = {
  create: function(req, res) {
    db.ChangeActivator
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findById: function (req, res) {
    db.ChangeActivator
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function (req, res) {
    db.ChangeActivator
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.ChangeActivator
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIds: function (req, res) {
    db.ChangeActivator
      .findById(req.params.id)
      .then(dbModel => console.log(dbModel))
      .catch(err => res.json(err));
  },

  // findByIds: function (req, res) {
  //   let searchArray = req.params;
  //   for (let i = 0; i < searchArray.length; i++) {
  //     db.ChangeActivator
  //   }
  //   db.ChangeActivator
  //     .findById(req.params)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.json(err));
  // },

}