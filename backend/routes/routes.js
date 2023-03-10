const express = require('express');
const router = express.Router();
const Model = require('../models/model');


// Get all Method
router.get('/get-all', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  }
  catch (error) {
    res.status(500).json({message: error.message});
  }
});

module.exports = router;