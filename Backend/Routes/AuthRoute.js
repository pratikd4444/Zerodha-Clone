const { SignUp , Login, LogOut  } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddlewares");
const router = require("express").Router();

router.post("/signup", SignUp);
router.post('/login', Login);
router.post("/logout" , LogOut) ;
router.post('/',userVerification)

module.exports = router;

