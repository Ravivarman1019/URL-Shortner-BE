const express = require('express');
const router = express.Router();
const { registerUser, loginUser, forgotPassword, resetPassword } = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register user
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', loginUser);

// @route   POST /api/auth/forgot-password
// @desc    Forgot password
router.post('/forgot-password', forgotPassword);

// @route   POST /api/auth/reset-password
// @desc    Reset password
router.post('/reset-password', resetPassword);

module.exports = router;
