const models = require('../models');

const News = models.News;
const Image = models.Image;

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

const list = (req, res, next) => {
  News.findAll({
    attributes: [['id', 'newsId'], 'title', 'description'],
    include: [{
      model: Image,
      where: { fk_newsId: 'News.id' },
    }],
  })
    .then(result => res.status(200).send(result))
    .catch(error => next(error));
};

// const list = (req, res, next) => News
//   .findAll({
//     include: [{
//       model: Image,
//       as: 'image',
//       required: false,
//       attributes: ['id', 'title'],
//       through: { attributes: [] },
//     }],
//   })
//   .then(result => res.status(200).send(result))
//   .catch(error => next(error));

const getMainNews = (req, res, next) => News
  .findAll({
    order: [
      ['updatedAt', 'DESC'],
    ],
    limit: 3,
    include: [{
      model: Image,
      required: false,
      // where: { fk_newsId: 'news.id' },
    }],
  })
  .then(result => res.status(200).send(result))
  .catch(error => next(error));

const getById = (req, res, next) => {
  const newsId = req.param.id;

  News.findAll({
    where: {
      id: newsId,
    },
  })
    .then(result => res.status(200).send(result))
    .catch(error => next(error));
};

module.exports = {
  create,
  list,
  getById,
  getMainNews,
};
