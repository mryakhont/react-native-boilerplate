export function copyObject(targetObject, sourceObject) {
  const targetKeys = Object.keys(targetObject);
  const sourceKeys = Object.keys(sourceObject);
  for (let i = 0; i < targetKeys.length; i++) {
    const key = targetKeys[i];
    const sourceKey = sourceKeys.find(
      (s) => s.toLowerCase() === key.toLowerCase(),
    );
    if (sourceKey != undefined) {
      targetObject[key] = sourceObject[sourceKey];
    }
  }

  return targetObject;
}

export function getUrlParam(key) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

export function changeUrlParam(url, param, newValue) {
  let newUrl = new URL(url);
  if (newUrl.searchParams.get(param) != null) {
    newUrl.searchParams.set(param, newValue);
  }

  return newUrl.href;
}

export function getFileExtension(fileName) {
  return fileName.split('.').pop();
}

export function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function getPropertyNameOfObjectValue(object, value) {
  let propName;
  var keys = Object.keys(object);
  keys.forEach((key) => {
    if (object[key] === value) {
      propName = key;
      return;
    }
  });
  return propName;
}

export function isString(object) {
  return Object.prototype.toString.call(object) === '[object String]';
}
