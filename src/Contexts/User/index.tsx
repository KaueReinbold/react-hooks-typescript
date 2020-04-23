import React, { createContext, useState, useEffect } from 'react';
import IUser from '../../Models/IUser';
import Api from '../../Services/Api';
import RepositoryProvider from '../Repositories';

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<IUser>({
  name: '',
  all_repos_name: '',
  avatart_url: '',
  login: '',
  repos: [],
});

const UserProvider = ({ children }: Props) => {
  const [state, setState] = useState<IUser>();

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    let user = await Api.GetUser(process.env.REACT_APP_GITHUB_USER_NAME);

    setState(user);
  }

  return (
    <UserContext.Provider value={state as IUser}>
      <RepositoryProvider>{children}</RepositoryProvider>
    </UserContext.Provider>
  );
};

export default UserProvider;
