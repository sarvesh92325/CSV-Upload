const express = require('express');
const app = express();
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController.home );



module.exports = router;
