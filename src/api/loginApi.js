import api from './apiService.js';

export const login = (loginData) => {
  return api.post('users/sign_in', { user: loginData });
};

export const logout = () => {
  return api.delete('users/sign_out');
};
