require('dotenv').config();
const mongoString = process.env.MONGO_URL;
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const routes = require('./routes/routes');

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use('/api', routes);

mongoose.set('strictQuery', false);
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const port = process.env.PORT || 3001;
if (process.env.ENVIRONMENT === 'production') {
    exports.handler = serverless(app);
} else {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}.`);
    });
}