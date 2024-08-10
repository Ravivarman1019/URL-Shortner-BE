const express = require('express');
const router = express.Router();
const { shortenUrl, getUrl } = require('../controllers/urlController');
const authMiddleware = require('../middleware/authmiddleware');

router.post('/shorten', authMiddleware, shortenUrl);


router.get('/:code', getUrl);

module.exports = router;
