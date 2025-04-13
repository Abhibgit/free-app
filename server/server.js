// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Test api payments

const merchants = [
  {
    merchantId:"<your merchantId>",
    merchantSiteId:"<your merchantSiteId>",
    clientRequestId:"<unique request ID in merchant system>",
    timeStamp:"<YYYYMMDDHHmmss>",
    checksum:"<calculated checksum>"
  }
]

app.post('/api/login', async (req, res) => {
  const { merchantId, merchantSiteId } = req.body;})

  // Find user by username
  const merchant = merchants.find(m => m.merchantId === merchantId);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare the password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from the MERN app backend');
});
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Set the server to listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
