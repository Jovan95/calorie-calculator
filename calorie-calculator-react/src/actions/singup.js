import api from '../api';
import { userLoggedIn } from './auth';

export const singup = data => dispatch =>
  api.user.singup(data)
          .then(user => dispatch(userLoggedIn(user)))
