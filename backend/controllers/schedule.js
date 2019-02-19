const models = require('../models');

const Schedule = models.Schedule;

const create = (req, res) => {
  return Schedule
    .create({
      time: req.body.time,
      description: req.body.description,
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error));
};

const getScheduleByDate = (req, res, next) => {
  const scheduleDate = req.params.date;

  Schedule.findAll({
    where: {
      updatedAt: scheduleDate,
    },
  })
    .then(result => res.status(200).send(result))
    .catch(error => next(error));
};

module.exports = {
  create,
  getScheduleByDate,
};
