import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body.credentials;
  const user = new User({ email });
  user.setPassword(password);
  user.save().then
})

export default router;
