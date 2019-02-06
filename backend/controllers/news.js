const models = require('../models');

const News = models.news;
const Image = models.image;

const create = (req, res) => {
  return News
    .create({
      title: req.body.title,
      description: req.body.description,
      image_id: req.body.imageId,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));
};

// const list = (req, res, next) => News
//   .findAll()
//   .then(result => res.status(200).send(result))
//   .catch(error => next(error));
const list = (req, res, next) => News
  .find({
    include: [{
      model: Image,
      as: 'image',
      required: false,
      attributes: ['id', 'title'],
      through: { attributes: [] },
    }],
  });

module.exports = {
  create,
  list,
};
