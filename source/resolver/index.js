import { login, getUserDetails } from './Query';
import { signup, updateUser, deleteUser } from './Mutation';

const root = {
  login,
  getUserDetails,
  signup,
  updateUser,
  deleteUser,
};

export default root;
