import React, { createContext, useState, useEffect } from 'react';
import IRepository from '../../Models/IRepository';
import Api from '../../Services/Api';

type Props = {
  children: React.ReactNode;
};

export const RepositoryContext = createContext<IRepository[]>([]);

const RepositoryProvider = ({ children }: Props) => {
  const [state, setState] = useState<IRepository[]>([]);

  useEffect(() => {
    loadRepositories();
  }, []);

  async function loadRepositories() {
    let repositories = await Api.GetRepositoriesFromUser(
      process.env.REACT_APP_GITHUB_USER_NAME
    );
    console.log(repositories);
    setState(repositories);
  }
  return (
    <RepositoryContext.Provider value={state}>
      {children}
    </RepositoryContext.Provider>
  );
};

export default RepositoryProvider;
