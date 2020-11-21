import { createContext, useContext } from 'react';
import { getAuthenticationToken } from 'Store/local.store';

export let ContactContext = { authenticated: false, token: '' };

export const ContactContextAccessor = createContext(ContactContext);

export function useContactContext() {
  getAuthenticationToken().then((token) => {
    ContactContext.authenticated = token != null;
    ContactContext.token = token;
  });
  return useContext(ContactContextAccessor);
}
