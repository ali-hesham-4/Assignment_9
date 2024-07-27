import { Router } from "express";
import * as UC  from "./users.controllers.js";
import * as UV from "./users.validation.js";
import { validation } from "../../middleware/validation.js";

const router = Router();

router.post("/" ,validation(UV.signUpValidation) ,UC.signUp)
router.get("/confirmEmail/:token", UC.conformEmail)
router.post("/login",validation(UV.signInValidation),UC.logIn)





export default router;