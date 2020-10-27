import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const StudentApi = {
  getAll: () => {
    return axios.get(`${BASE_URL}/students`).then((response) => {
      return response.data;
    });
  },
};

export default StudentApi;
