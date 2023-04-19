import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:5173',
});

export default axios;
