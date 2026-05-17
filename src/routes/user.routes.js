import { Router } from "express";
import {registerUser,loginUsername} from "../controllers/user.controllers.js"

const router=Router();

router.post("/register",registerUser);
router.post("/login",loginUsername);

export default router;