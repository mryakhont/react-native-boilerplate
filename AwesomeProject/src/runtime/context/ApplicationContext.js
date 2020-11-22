import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { getAuthenticationToken } from 'Store/local.store';

const InitContactContext = { authenticated: false, token: '' };
const ContactContextAccessor = createContext(InitContactContext);

export function useContactContext() {
  return useContext(ContactContextAccessor);
}

function ApplicationContext(props) {
  const [contactContext, setContactContext] = useState(InitContactContext);
  React.useEffect(() => {
    const getToken = async () => {
      const token = await getAuthenticationToken();
      setContactContext({
        token: token,
        authenticated: token != null && props.authenticated,
      });
    };
    getToken();
  }, [props.authenticated]);

  return (
    <ContactContextAccessor.Provider value={contactContext}>
      {props.children}
    </ContactContextAccessor.Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.login.authenticated,
  };
};

export default connect(mapStateToProps, null)(ApplicationContext);
