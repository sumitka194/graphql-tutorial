import store from '../data';

let { users } = store;
let id = 0;

const signup = ({ username, password }) => {
  try {
    const user = { id, username, password };
    users.push(user);
    id += 1;
    return 'Signup success. Please login';
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = ({ username, password }, { request }) => {
  try {
    const { user } = request;
    if (!user) {
      throw new Error('Unauthorize');
    }
    let updatedUser = null;
    const updatedUserArray = users.filter((data) => {
      if (user.username === data.username) {
        const newData = {};
        newData.username = username || data.username;
        newData.password = password || data.password;
        newData.id = data.id;
        updatedUser = newData;
        return newData;
      }
      return false;
    });
    users = updatedUserArray;
    return updatedUser;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUser = (ars, { request }) => {
  try {
    const { user } = request;
    if (!user) {
      throw new Error('Unauthorized');
    }
    const updatedUserArray = users.filter((data) => {
      if (user.username === data.username) {
        return false;
      }
      return true;
    });
    users = updatedUserArray;
    return 'deleted Successfully';
  } catch (err) {
    throw new Error(err);
  }
};

export {
  signup,
  updateUser,
  deleteUser,
};
