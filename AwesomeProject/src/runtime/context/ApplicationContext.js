import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import { getAuthenticationToken } from 'Store/local.store';

const InitContactContext = { authenticated: false, token: '' };
const ContactContextAccessor = createContext(InitContactContext);

export function useContactContext() {
  return useContext(ContactContextAccessor);
}

export default function ApplicationContext(props) {
  const [contactContext, setContactContext] = useState(InitContactContext);
  React.useEffect(() => {
    const getToken = async () => {
      const token = await getAuthenticationToken();
      setContactContext({ token: token, authenticated: token != null });
    };
    getToken();
  }, []);

  return (
    <ContactContextAccessor.Provider value={contactContext}>
      {props.children}
    </ContactContextAccessor.Provider>
  );
}
