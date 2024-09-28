const express=require("express");

const router=express.Router();
const authenticate = require('../middleware/authenticate');
const authenticateAdmin = require('../middleware/admin.middleware');
const userController=require("../controllers/user.controller.js")

// router.get("/",userController.getAllUsers)
// router.get("/profile",userController.getUserProfile)

router.get('/profile', authenticate, getUserProfile);
router.get('/all-users', authenticate, authenticateAdmin, getAllUsers);

module.exports=router;