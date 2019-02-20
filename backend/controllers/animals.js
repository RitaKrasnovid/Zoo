const models = require('../models');

const Animal = models.Animals;
const Image = models.Images;

const create = (req, res) => {
  return Animal
    .create({
      title: req.body.title,
    })
    .then(animal => res.status(201).send(animal))
    .catch(error => res.status(400).send(error));
};

async function getAll(req, res, next) {
  Animal.findAll({
    include: [{
      model: Image,
      as: 'images',
    }],
  })
    .then(result => res.status(200).send(result))
    .catch(error => next(error));
}

async function filterByNameContainsValue(req, res, next, value) {
  Animal.findAll({
    where: {
      title: {
        $like: `%${value}%`,
      },
    },
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(error => next(error));
}

async function filterByClass(req, res, next, value) {
  Animal.findAll({
    where: {
      class: value,
    },
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(error => next(error));
}

async function list(req, res, next) {
  const queryKeys = Object.keys(req.query);
  const queryValue = Object.values(req.query);

  if (queryKeys.length) {
    queryKeys.map((a) => {
      let filter;

      if (a === 'search') {
        filter = filterByNameContainsValue(req, res, next, queryValue);
      } if (a === 'class') {
        filter = filterByClass(req, res, next, queryValue);
      }

      return filter;
    });
  }
  await getAll(req, res, next);
}

module.exports = {
  create,
  list,
};
