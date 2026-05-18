import { Router } from "express";
import {registerUser,loginUsername,getUserProfile,editProfile,changePassword} from "../contollers/user.controllers.js"

const router=Router();

router.post("/register",registerUser);
router.post("/login",loginUsername);
router.post("/profile",getUserProfile);
router.post('editProfile',editProfile);
router.post('/changePassword',changePassword);

export default router;