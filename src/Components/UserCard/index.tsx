import React, { useContext } from 'react';
import IUser from '../../Models/IUser';
import { UserContext } from '../../Contexts/User';
import { RepositoryContext } from '../../Contexts/Repositories';

const UserCard: React.FC = () => {
  const context = useContext(UserContext);
  const repositoryContext = useContext(RepositoryContext);

  return (
    <h1>
      {context?.name}{' '}
      <small> (number of repos {repositoryContext?.length || 0})</small>
    </h1>
  );
};

export default UserCard;
