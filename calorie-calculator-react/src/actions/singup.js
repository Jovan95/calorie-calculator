import api from '../api';
import { userLoggedIn } from './auth';

export const singup = credentials => dispatch =>
  api.user.singup(credentials)
          .then(user => dispatch(userLoggedIn(user)))
