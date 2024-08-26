import { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak('/keycloak.json');

export const useKeycloak = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(auth => {
      setAuthenticated(auth);
    }).catch(console.error);
  }, []);

  return { keycloak, authenticated };
};

export const getToken = () => keycloak.token;