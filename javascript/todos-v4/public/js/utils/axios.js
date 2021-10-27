// axios.js
export default {
  get(url) {
    // 프로미스를 반환
    return axios.get(url).then(({ data }) => data);
  },
  post(url, payload) {
    return axios.post(url, payload).then(({ data }) => data);
  },
  patch(url, payload) {
    return axios.patch(url, payload).then(({ data }) => data);
  },
  delete(url) {
    return axios.delete(url).then(({ data }) => data);
  },
};
