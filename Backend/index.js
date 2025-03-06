const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  port: 3307,
  password: "",
  database: "felveteli"
});

app.get("/", (req,res) => {
  res.send("Szerver fut");
});


const port = 3333;
app.listen(port, () => {
  console.log(`Szerver fut a ${port} porton!`);
});