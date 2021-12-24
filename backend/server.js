const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const redalertRouter = require('./routes/redalerts');
const audioredstRouter = require('./routes/audioreds');
const usersRouter = require('./routes/users');

app.use('/redalerts', redalertRouter);
app.use('/audioreds', audioredstRouter);
app.use("/users", usersRouter);



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
