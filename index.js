const express = require('express');
const routes = require('./routes/index');
const Database = require('./config/database');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());

const db = new Database(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.connect().catch((err) => console.error('Error connecting to database:', err));

app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
