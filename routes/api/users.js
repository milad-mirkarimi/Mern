const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   POST api/users
// @desc    Register user
// @access  Public

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('user route');
});

module.exports = router;
