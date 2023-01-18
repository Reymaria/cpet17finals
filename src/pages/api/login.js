import {withSessionRoute} from '../../lib/config/withSession';
import {pool} from '../../lib/db';

var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default withSessionRoute(async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not found.')

  const username = req.body.username;
  const password = req.body.password;

  console.log("\x1b[31;4m/!\\ aaaa /!\\: src/pages/api/login.js:14\x1b[0m");
  try {
    const query = await pool.query("SELECT * FROM users WHERE user = ?", [username]);
  } catch (error) {
    return res.send({ok: false});
  }
  
  const db_user = query.user;
  const db_hash = query.hash;
  
  if (username === db_user && bcrypt.hashSync(password, salt) === db_hash) {
    req.session.user = username;
    await req.session.save();

    return res.send({ok: true});
  }
  
  return res.send({ok: false});
})
