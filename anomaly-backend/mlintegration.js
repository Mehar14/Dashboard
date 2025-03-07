const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const anomalySchema = new mongoose.Schema({ date: String, count: Number });
const Anomaly = mongoose.model('Anomaly', anomalySchema);

async function fetchAndStoreAnomalies() {
  try {
    const response = await axios.post('http://localhost:5001/ml/predict', { params: { date: "2024-01-01" } });
    const anomalies = response.data;

    await Anomaly.insertMany(anomalies);
    console.log("Anomalies stored in MongoDB.");
  } catch (error) {
    console.error("Error fetching ML predictions:", error);
  }
}

fetchAndStoreAnomalies();
