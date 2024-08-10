const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const sendEmail = require('../utils/email');

// Register User
exports.registerUser = async (req, res) => {
    // registration logic here
};

// Login User
exports.loginUser = async (req, res) => {
    // login logic here
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
    // forgot password logic here
};

// Reset Password
exports.resetPassword = async (req, res) => {
    // reset password logic here
};
