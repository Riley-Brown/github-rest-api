require("dotenv").config();
const express = require('express');
const axios = require('axios');


const app = express();

app.get('/', (req, res) => {
  const api = axios.get(`https://api.github.com/users/Riley-Brown/repos?per_page=4&sort=created:asc&client_id=5339e254177ffa590980&client_secret=${process.env.CLIENT_SECRET}`)
    .then(response => {
      const data = response.data;
      res.send(JSON.stringify(data))
    })
})
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server running on ${port}`))