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
// TODO GTB-工程实践: + 数据请求提取到单独的service
// TODO GTB-工程实践: + 抽取常量
