import express from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res) => {
  const { _id } = req.body;
  User.findOne({ _id }).then(user =>{
    user ? res.status(200).json({ data: user.about }) : res.status(400).json({errors:  "no such user"})
  })
})



export default router;
