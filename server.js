const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));    //this is a staple

// parse incoming JSON data
app.use(express.json());    //this is a staple
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

//added heroku, https://animal-crackr.herokuapp.com
