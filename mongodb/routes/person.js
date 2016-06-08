import Person from '../models/Person';

exports.method = 'get';
exports.path = '/person';
exports.handler = function (req, res) {
  var name = req.param.name;
  var age = req.param.age;
  var address = req.param.address;

  var person = new Person({
    name,
    age,
    address
  });
  person.save(err => {
    if (err) {
      return res.status(400).send({
        message: 'not ok'
      });
    }

    res.status(200).send({
      message: 'ok'
    });
  });
};
