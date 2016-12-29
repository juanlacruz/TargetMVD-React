import api from './apiService.js';

export const signup = (signupData) => {
  return api.post('users', { user: signupData });
};

export const editProfile = (editData) => {
  let id = editData.id;
  delete editData.id;
  return api.put(`users/${id}`, { user: editData });
}
