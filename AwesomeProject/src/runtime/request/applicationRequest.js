import {changeUrlParam} from 'Utils/object-utilities';

const ROOT_REQUEST = '';

export async function get(url, data = undefined) {
  if (data !== undefined) {
    url = url + '?' + serialize(data);
  }
  return await fetch(ROOT_REQUEST + url, {
    method: 'get',
    redirect: 'follow',
  })
    .then((res) => {
      if (res.redirected) {
        window.location.href = changeUrlParam(
          res.url,
          'ReturnUrl',
          window.location.pathname,
        );
      }

      if (res.ok === true) {
        return res.json();
      }

      throw res;
    })
    .then((data) => data);
}

export async function post(url, data) {
  return await fetch(ROOT_REQUEST + url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok === true) {
        return res.json();
      }

      throw res;
    })
    .then((data) => data);
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
}
