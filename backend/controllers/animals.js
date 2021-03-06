const models = require('../models');

const Animal = models.Animal;

const create = (req, res) => {
  return Animal
    .create({
      title: req.body.title,
    })
    .then(animal => res.status(201).send(animal))
    .catch(error => res.status(400).send(error));
};

const list = (req, res, next) => Animal
  .findAll()
  .then(result => res.status(200).send(result))
  .catch(error => next(error));

module.exports = {
  create,
  list,
};
