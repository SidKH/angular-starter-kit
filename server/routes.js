var dataLoader = require('./libs/loader.js');

/*jslint unparam:true*/
module.exports = function (app) {

  app.get('/api/test', function (req, res) {
    dataLoader('test.json')
      .fail(function (err) {
        res.status(500).send(err);
      })
      .then(function (data) {
        res.status(200).send(data);
      });
  });

};