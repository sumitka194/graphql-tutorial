import store from '../data';

const { user, vehicle, state } = store;

const getUser = ({ id }) => user.filter(data => data.id === id)[0];

const getState = ({ id }) => state.filter(data => data.id === id)[0];

const getVehcile = ({ id }) => vehicle.filter(data => data.id === id)[0];

const root = {
  user: getUser,
  sate: getState,
  vehcile: getVehcile,
};

export default root;
