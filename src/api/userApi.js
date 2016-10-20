import api from './apiService.js';

export const signup = (signupData) => {
  return api.post('users', { user: signupData });
};
