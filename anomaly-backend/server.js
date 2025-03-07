const express = require('express');
const mongoose = require('mongoose');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const anomalySchema = new mongoose.Schema({ date: String, count: Number });
const Anomaly = mongoose.model('Anomaly', anomalySchema);

const sqlConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DB,
  server: process.env.SQL_HOST,
  options: { encrypt: true }
};

app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).send("Access denied");
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
});

app.get('/api/anomalies', async (req, res) => {
  const { startDate, endDate } = req.query;
  const anomalies = await Anomaly.find({ date: { $gte: startDate, $lte: endDate } });
  res.json(anomalies);
});

app.listen(5000, () => console.log("Server running on port 5000"));
