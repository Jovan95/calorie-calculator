import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body.credentials;
  const user = new User({ email });
  user.setPassword(password);
  user.save()
          .then(user => res.json({ user: user.toAuthJSON() }))
          .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
})

export default router;
