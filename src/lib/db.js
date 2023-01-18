import mysql from 'serverless-mysql';

const pool = mysql({
  config: {
    host: 'http://192.168.18.10/phpmyadmin/',
    user: 'localdb',
    password: "",
    port: 3306,
    database: 'localdb'
  }
});

export {pool}