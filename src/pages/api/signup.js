import {useRef} from 'react';

var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default function handler(req, res) {
  console.log('req.body:');
  console.log(req.body);

  const name = req.body.name;  
  const email = req.body.email;
  const password = req.body.password;
  
  try {

    // do a database insert here
    "INSERT INTO `userdata`(`name`, `email`, `password`) VALUES ('name', 'email', 'password')"
    res.send({ok: true});
  } catch (error) {
    res.send({ok: false});
  }
}