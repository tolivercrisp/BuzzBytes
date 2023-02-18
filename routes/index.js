const router = require('express').Router();
const apiRoutes = require('./api');

// Prefix all routes with /api
router.use('/api', apiRoutes);

// If invalid route is used, send this
router.use((req, res) => res.send('Nope.'));

module.exports = router;