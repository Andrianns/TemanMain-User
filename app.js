const express = require('express');
const app = express();
const router = require('./routers/index.js');
const cors = require('cors');
const port = process.env.PORT || 7543;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('error'));
// app.listen(port, () => {
//   console.log(`App is listening to ${port}`);
// });

module.exports = app;
