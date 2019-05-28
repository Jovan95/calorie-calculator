import api from '../api';

export const getData = (_id) => () =>
   api.user.getData(_id);
