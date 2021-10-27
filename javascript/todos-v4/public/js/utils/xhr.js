// xhr.js
const req = (method, url, callback, payload) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify(payload));

  xhr.onload = () => {
    if (xhr.status === 200 || xhr.status === 201) {
      callback(JSON.parse(xhr.response));
    } else {
      console.error(xhr.status, xhr.statusText);
    }
  };
};
export default {
  get(url, callback) {
    req('GET', url, callback);
  },
  post(url, payload, callback) {
    req('POST', url, callback, payload);
  },
  patch(url, payload, callback) {
    req('PATCH', url, callback, payload);
  },
  delete(url, callback) {
    req('DELETE', url, callback);
  },
};

// export const get = (url, callback) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url);
//   xhr.send();
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       callback(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status, xhr.statusText);
//     }
//   };
// };

// export const post = (url, payload, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(JSON.stringify(payload));
//   xhr.onload = () => {
//     if (xhr.status === 200 || xhr.status === 201) {
//       callback(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status, xhr.statusText);
//     }
//   };
// };

// export const patch = (url, payload, callback) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('PATCH', url);
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.send(JSON.stringify(payload));

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       callback(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status, xhr.statusText);
//     }
//   };
// };

// export const remove = (url, callback) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('DELETE', url);
//   xhr.send();
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       callback(JSON.parse(xhr.response));
//     } else {
//       console.error(xhr.status, xhr.statusText);
//     }
//   };
// };
