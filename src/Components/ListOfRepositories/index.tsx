import React, { useMemo, useContext } from 'react';
import { RepositoryContext } from '../../Contexts/Repositories';

const ListOfRepositories: React.FC = () => {
  const context = useContext(RepositoryContext);

  const all_repos_name = useMemo(
    () => context?.map((repo) => <li key={repo.name}>{repo.name}</li>),
    [context]
  );

  return (
    <div>
      <ol>{all_repos_name}</ol>
    </div>
  );
};

export default ListOfRepositories;
