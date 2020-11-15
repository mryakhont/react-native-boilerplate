import requestInterceptor from 'Runtime/request/requestInterceptor';

const ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
const attachment = requestInterceptor(ENVIRONMENT_IS_WORKER ? self : window);

attachment.register({
  request: () => console.log('request'),
  response: (result) => console.log('response', result),
  responseError: (error) => console.log('responseError', error),
});
