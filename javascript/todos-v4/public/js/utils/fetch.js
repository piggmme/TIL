// fetch.js
const parseToJSON = res => {
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};
export default {
  get(url) {
    // 프로미스를 반환
    return fetch(url).then(parseToJSON);
  },
  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(parseToJSON);
  },
  patch(url, payload) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(parseToJSON);
  },
  delete(url) {
    return fetch(url, {
      method: 'DELETE',
    }).then(parseToJSON);
  },
};
