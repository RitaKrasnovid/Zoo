const animalsController = require('../controllers').animals;

module.exports = (app) => {
  app.get('/api/', (req, res) => res.status(200).send({
    message: 'API working',
  }));

  app.get('/api/animals', animalsController.list);
  app.post('/api/animals', (req, res) => animalsController.create);
};
