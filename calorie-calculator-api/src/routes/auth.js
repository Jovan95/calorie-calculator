import express from 'express';
import User from '../models/User';
import { sendResetPasswordEmail } from '../mailer';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', ( req, res ) => {
 const {credentials} = req.body;
 User.findOne({ email: credentials.email }).then(user => {
   if (user && user.isValidPassword(credentials.password)) {
      res.json({
        user: user.toAuthJSON()
      })
   }else {
     res.status(400).json({errors : {global : "Invalid Credentials"}})
   }
 });
})

router.post("/confirmation", (req, res) => {
  const token = req.body.token;
  User.findOneAndUpdate(
     { confirmationToken: token },
     {confirmationToken: "", confirmed: true},
     {new: true}
   ).then(user =>
     user ? res.json({ user: user.toAuthJSON() }) : res.status(400).json({})
   );
});

router.post("/reset_password_request", (req, res) => {
  const {email} = req.body;
  User.findOne({ email }).then(user => {
    if(user) {
      sendResetPasswordEmail(user);
      res.json({});
    }else {
      res.status(400).json({errors: {global: "No such email!"}})
    }
  }).catch((err) => {
    res.status(400).json({errors: {global: "find user error!"}})
  })
})

router.post('/validate_token', (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, (err) => {
    if (err) {
      res.status(401).json({})
    }else {
      res.json({})
    }
  })
})

export default router;
