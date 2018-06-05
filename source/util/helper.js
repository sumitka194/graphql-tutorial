import jwt from 'jsonwebtoken';
import store from '../data';

const { users } = store;

const generateToken = data => jwt.sign(data, 'secret', { expiresIn: '1y' });

const authMiddleware = async (req) => {
  try {
    const token = req.headers.authentication;
    const { user } = await jwt.verify(token, 'secret');
    let allowedUser = null;
    if (user) {
      allowedUser = users.filter((data) => {
        if (data.username === user.username) {
          return true;
        }
        return false;
      });
    }
    [req.user] = allowedUser;
  } catch (err) {
    console.log(err);
  }
  req.next();
};

export {
  generateToken,
  authMiddleware,
};
