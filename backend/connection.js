const mysql = require('mysql')

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Rimane1390.',
  database : 'oneCodedev'
})

module.exports = connection
