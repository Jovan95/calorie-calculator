import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';


const schema = new mongoose.Schema(
  {
  email : {type: String, required: true, lowercase: true, index: true, unique: true},
  passwordHash: {type: String, required: true},
  _id: {type: mongoose.Schema.Types.ObjectId, required: true},
  about:{
      name: {type: String, required: true},
      lastName: {type: String, required: true},
      gender: {type: String, required: true},
      age: {type: String, required: true},
      height: {type: String, required: true},
      weight: {type: String, required: true}
  },
  confirmed: { type: Boolean, default: false},
  confirmationToken: { type: String, deafault: ""}
  },
  { timestamps: true}
);

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash)
};

schema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
}

schema.methods.setConfirmationToken = function setConfirmationToken() {
  this.confirmationToken = this.generateJWT();
}

schema.methods.generateConfirmationUrl = function generateConfirmationUrl(){
  return `${process.env.HOST}/confirmation/${this.confirmationToken}`
}

schema.methods.generateResetPasswordUrl = (user) =>
  `${process.env.HOST}/reset_password/${user.generateResetPasswordToken()}`


schema.methods.generateResetPasswordToken = function generateResetPasswordToken() {
  return jwt.sign(
    {
    _id: this._id
    },
    process.env.JWT_SECRET,
    {expiresIn: '1h'}
  )
};

schema.methods.generateJWT = function generateJWT() {
  return jwt.sign(
    {
    email: this.email,
    _id: this._id,
    confirmed: this.confirmed
    },
    process.env.JWT_SECRET)
};

schema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    _id: this._id,
    token: this.generateJWT()
  }
};

schema.plugin(uniqueValidator, {message: "This email is already taken!"});

export default mongoose.model('User', schema);
