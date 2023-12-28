import { Router } from "express";
import { createValidator } from 'express-joi-validation'
import { schemas } from "./validations";
import { aboutShortedUrl, createShortedUrl } from "./management";
import { checkValidUrl } from "../../middlewares";

const validator = createValidator({
    passError: true,
  })
  

const routerWelcome = Router();

routerWelcome.post('/', validator.body(schemas.createShortedUrl), createShortedUrl)
routerWelcome.get('/:url', [validator.params(schemas.aboutShortedUrl), checkValidUrl], aboutShortedUrl)

export default routerWelcome