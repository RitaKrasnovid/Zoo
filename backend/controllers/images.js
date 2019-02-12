const models = require('../models');

const Image = models.Images;

const create = (req, res) => {
  return Image
    .create({
      title: req.body.title,
    })
    .then(image => res.status(201).send(image))
    .catch(error => res.status(400).send(error));
};

const getById = (req, res, next) => {
  const imageId = req.params.id;

  Image.findAll({
    attributes: ['data'],
    where: {
      id: imageId,
    },
  })
    .then(result => res.status(200).send(result))
    .catch(error => next(error));
};

const list = (req, res, next) => Image
  .findAll()
  .then(result => res.status(200).send(result))
  .catch(error => next(error));

module.exports = {
  list,
  create,
  getById,
};
