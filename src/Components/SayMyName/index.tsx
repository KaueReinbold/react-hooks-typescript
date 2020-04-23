import React, { useRef, useCallback, useEffect, useContext } from 'react';
import IUser from '../../Models/IUser';
import { UserContext } from '../../Contexts/User';

const SayMyName: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const context = useContext(UserContext);

  const greeting = useCallback(
    (user?: IUser) => alert(`Hello ${user?.name}`),
    []
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div tabIndex={1}>
      <input
        ref={inputRef}
        type="button"
        value="Say My Name"
        onClick={() => greeting(context)}
      />
    </div>
  );
};

export default SayMyName;
