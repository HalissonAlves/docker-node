const express = require('express');
const mysql = require('mysql');
const util = require('util');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'full_cycle'
}

const connection = mysql.createConnection(config);
const query = util.promisify(connection.query).bind(connection);

app.get('/', async (req, res) => {
  try {
    await query(`CREATE TABLE IF NOT EXISTS full_cycle (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )`);

    await query(`INSERT INTO full_cycle(name) VALUES('Halisson')`);

    const names = await query(`SELECT * FROM full_cycle`);

    res.send(`<h1>Full Cycle Rocks!</h1><br>${names.map(name => `<p>${name.name}</p>`).join('')}`);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});