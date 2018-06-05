import _ from 'lodash';
import store from '../data';
import { generateToken } from '../util/helper';

const { users } = store;

const login = async ({ username, password }) => {
  try {
    const newUser = users.filter((data) => {
      if (data.username === username && data.password === password) {
        return true;
      }
      return false;
    });
    if (newUser.length > 0) {
      const token = await generateToken({ user: _.pick(newUser[0], ['id', 'username']) });
      return token;
    }
    throw new Error('Invalid Credentials');
  } catch (err) {
    throw new Error(err);
  }
};

const getUserDetails = async (args, { request }) => {
  try {
    const { user } = request;
    if (!user) {
      throw new Error('Unauthorized');
    }
    const newUser = users.filter((data) => {
      if (data.username === user.username) {
        return true;
      }
      return false;
    });
    if (newUser.length > 0) {
      return newUser[0];
    }
    throw new Error('Not Found');
  } catch (err) {
    throw new Error(err);
  }
};

export {
  login,
  getUserDetails,
};
