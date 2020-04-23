import React, { useRef } from 'react';
import SayHi, { Ref } from './SayHelloWorld';

const HelloWorld: React.FC = () => {
  const ref = useRef<Ref>(null);

  return (
    <div>
      <button onClick={() => ref.current?.hello()}>Let's Go</button>
      <SayHi ref={ref} />
    </div>
  );
};

export default HelloWorld;
