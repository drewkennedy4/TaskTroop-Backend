const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');

const app = express();
app.use(bodyParser.json());
app.use('/api', registerRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tasktroop', { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
