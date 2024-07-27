import { Router } from "express";
import * as MC from "./messages.controller.js";
import { auth } from "../../middleware/auth.js";
import * as MV from "../../middleware/validation.js";
import  { messagesValidation }  from "./messages.validation.js";

const router = Router();

router.post("",MV.validation(messagesValidation)  , MC.addMessage)
router.get("" , auth, MC.readMessage)
router.delete("" , auth, MC.deleteMessage)


export default router;