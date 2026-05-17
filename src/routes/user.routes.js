import { Router } from "express";
import {registerUser,loginUsername,getUserProfile,editProfile} from "../controllers/user.controllers.js"

const router=Router();

router.post("/register",registerUser);
router.post("/login",loginUsername);
router.post("/profile",getUserProfile);
router.post('editProfile',editProfile)

export default router;