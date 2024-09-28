// routes/admin.js
const express = require('express');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If authentication is successful, redirect to the admin panel
    return res.status(200).json({ message: 'Login successful', redirectUrl: '/admin' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;