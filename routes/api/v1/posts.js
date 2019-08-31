const express = require('express');


const router = express.Router();
const passport = require('passport');

const postsApi = require("../../../controller/api/v1/posts_api");


router.get('/', postsApi.index);
router.delete('/:id',passport.authenticate('jwt', {session: false}), postsApi.destroy);

//http://localhost:8010/api/v1/posts/5d638f743c1f873fc8daab2c  (delete)
//paste token in headers   
// key->authorization   value->  Bearer token



module.exports = router;