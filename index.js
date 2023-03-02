'use strict';

const express = require('express');
const { dirname } = require('path');
const path=require('path');
const port = 5059;
const app = express();

app.get('/',function(req, res)  {
  res.sendFile(path.join(__dirname,'/Utilisateurs.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
  })