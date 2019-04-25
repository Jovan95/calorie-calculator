import express from 'express';
import User from '../models/User';
import sendResetPasswordEmail from '../mailer';

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
  const { email } = req.body;
  User.findOne({ email }.then(user => {
    if(user) {
      sendResetPasswordEmail(email);
      res.json({});
    }else {
      res.status(400).json({errors: {global: "No such email!"}})
    }
   })
  )
})

export default router;
