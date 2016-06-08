import {model} from 'mongoose';

const Person = model('Person', {
  name: String,
  age: Number,
  address: String
});

exports default Person;
