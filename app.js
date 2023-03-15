const express = require('express');
const app = express();
const router = require('./routers/index.js');
const cors = require('cors');
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

// db.authenticate()
//   .then(() => console.log('Database connected'))
//   .catch((err) => console.log('error'));
// app.listen(port, () => {
//   console.log(`App is listening to ${port}`);
// });

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: 'containers-us-west-165.railway.app',
//   port: 4001,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'TemanMain-user',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

// // Test the connection by logging the Sequelize version
// (async () => {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
//   console.log(`Sequelize version: ${sequelize.version}`);
// })();

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

module.exports = app;
