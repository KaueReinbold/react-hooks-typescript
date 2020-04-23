import React from 'react';
import UserCard from './Components/UserCard';
import ListOfRepositories from './Components/ListOfRepositories';
import UserProvider from './Contexts/User';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';

const App: React.FC = () => {
  return (
    <UserProvider>
      <UserCard />

      <ListOfRepositories />

      <SayMyName />

      <HelloWorld />
    </UserProvider>
  );
};

export default App;
