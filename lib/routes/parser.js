var parser = require('../modules/query-parser');

exports.parse = function (req, res) {
  parser.parse(req.query.query, function (data) {
    res.send(data);
  });
};
