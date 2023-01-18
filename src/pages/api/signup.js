import {useRef} from 'react';
import {withSessionRoute} from '../../lib/config/withSession';
import {pool} from '../../lib/db';

var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default withSessionRoute(async (req, res) => {
  console.log('req.body:');
  console.log(req.body);

  const name = req.body.name;  
  const email = req.body.email;
  const password = req.body.password;
  
  try {
    const queryString = "INSERT INTO `userdata`(`name`, `email`, `password`) VALUES (?, ?, ?)";
    const query = pool.query(queryString, [name, email, bcrypt.hashSync(password, salt)]);
    
    req.session.user = name;
    await req.session.save();

    res.send({ok: true});
  } catch (error) {
    res.send({ok: false});
  }
});
