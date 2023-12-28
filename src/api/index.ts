import { Router } from "express";

import urlsRouter from './urls'

const router = Router();

router.use('/urls', urlsRouter)


router.use((err, req, res, next) => {
    if (err?.error?.isJoi) {
      res.status(400).json({
        type: err.type,
        message: err.error.toString(),
      })
    } else {
      // pass on to another error handler
      next(err)
    }
  })
  
router.get('/', (req, res) => {
res.json({ message: 'Welcome' })
})
    

export default router