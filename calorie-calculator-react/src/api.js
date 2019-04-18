import axios from 'axios';

export default {
  user: {
    login: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
    singup: credentials =>
      axios.post('/api/singup', { credentials }).then(res => res.data.user)
  }
};
