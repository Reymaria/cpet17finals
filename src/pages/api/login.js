import {withSessionRoute} from '../../lib/config/withSession';
import {pool} from '../../lib/db';

var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

export default withSessionRoute(async (req, res) => {
  if (req.method !== 'POST') return res.status(404).send('Not found.')

  const username = req.body.username;
  const password = req.body.password;

  console.log("\x1b[31;4m/!\\ aaaa /!\\: src/pages/api/login.js:14\x1b[0m");
  const query = await pool.query("SELECT * FROM users WHERE user = ?", [username]);
  const db_user = query.user;
  const db_hash = query.hash;
    
  // uncomment this line once db is supplied; for now, username and password field is both '...'
  if (username === db_user && bcrypt.hashSync(password, salt) === db_hash) {
  /// if (username === db_user && password === db_hash) {
    req.session.user = username;
    await req.session.save();
    
    return res.status(201).send({ok: true});
  }
    
  return res.status(403).send('');
})
