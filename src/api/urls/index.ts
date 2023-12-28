import { Router } from "express";
import { createValidator } from 'express-joi-validation'
import { schemas } from "./validations";
import { createShortedUrl } from "./management";

const validator = createValidator({
    passError: true,
  })
  

const routerWelcome = Router();

routerWelcome.post('/', validator.body(schemas.createShortedUrl), createShortedUrl)

export default routerWelcome