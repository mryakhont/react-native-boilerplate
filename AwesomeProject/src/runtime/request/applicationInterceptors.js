import requestInterceptor from 'Runtime/request/requestInterceptor';
import { logOut } from 'Store/login/actions';

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
      if (result.status === 401 && result.ok === false) {
        dispatch(logOut());
      }
      return result;
    },
    responseError: (error) => {
      return error;
    },
  });
}
