const express = require('express');
const dataController = require('../controllers/dataController');
const router = express.Router();


router.get('/', dataController.getData);
router.get('/data', dataController.getAddData);
router.post('/data', dataController.postData);

module.exports = router;