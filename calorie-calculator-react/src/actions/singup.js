import api from '../api';
import { userLoggedIn } from './auth';

export const singup = credentials => dispatch =>
  api.user.singup(credentials)
          .then(user => {
            localStorage.cCalJWT = user.token;
            dispatch(userLoggedIn(user))
          })
