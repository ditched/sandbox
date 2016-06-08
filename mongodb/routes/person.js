import Person from '../models/Person';

exports.method = 'get';
exports.path = '/person';
exports.handler = function (req, res) {
  res.status(200).send({
    message: 'ok'
  });
};
