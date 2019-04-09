import express from 'express';

const router = express.Router();

router.post('/', ( req, res) => {
 const {credentials} = req.body
})

export default router;
