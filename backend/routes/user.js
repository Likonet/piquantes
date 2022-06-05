const express = require('express'); // express pour la création d'un routeur
const router = express.Router();
const userCtrl = require ('../controllers/user'); // assoscié les fonctions aux différentes routes

//router.post('/api/auth/signup', userCtrl.signup);
router.post('/api/auth/signup', userCtrl.signup);

module.exports = router; // export 
