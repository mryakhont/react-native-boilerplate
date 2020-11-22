import requestInterceptor from 'Runtime/request/requestInterceptor';

const ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
const attachment = requestInterceptor(ENVIRONMENT_IS_WORKER ? self : window);

let requestHeaderConfiguration = {};

export function initFetchRequestInterceptor({ dispatch }) {
  attachment.register({
    request: (url, config) => {
      console.log(url, config);
      const currentHeader = config.headers;
      config.headers = Object.assign(
        currentHeader != null ? currentHeader : {},
        requestHeaderConfiguration,
      );

      return [url, config];
    },
    response: (result) => {
      console.log(result);
      if (result.response === 200 && result.ok === true) {
        
      }
      return result;
    },
    responseError: (error) => {
      return error;
    },
  });
}
