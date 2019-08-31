const express = require('express');

const router = express.Router();
const usersApi = require('../../../controller/api/v1/users_api');


router.post('/create-session', usersApi.createSession);


//http://localhost:8010/api/v1/user/create-session 
//enter email password in body
//then copy token



module.exports = router;