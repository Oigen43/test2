import api from 'services/api.service';

export const signIn = ({
  email,
  password,
}) => api.post('/account/signin', {
  email,
  password,
});

export const signUp = ({
  firstName,
  lastName,
  email,
  password,
}) => api.post('/account/signup', {
  firstName,
  lastName,
  email,
  password,
});

export const forgot = ({ email }) => api.post('/account/forgot-password', { email });

export const reset = ({ password, token }) => api.put('/account/reset-password', { password, token });

export const signOut = () => api.post('/account/logout');

export const getCurrentUser = () => api.get('/users/current');

export const updateCurrentUser = (data) => api.put('/users/current', data);
