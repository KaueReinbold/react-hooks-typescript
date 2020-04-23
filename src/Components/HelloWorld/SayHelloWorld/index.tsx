import React, { forwardRef, useImperativeHandle } from 'react';

interface Props {
  initialData?: string;
}

export interface Ref {
  hello(): void;
}

const SayHelloWorld: React.RefForwardingComponent<Ref, Props> = (
  props,
  ref
) => {
  function hello() {
    alert('Hello World!');
  }

  useImperativeHandle(ref, () => ({
    hello,
  }));

  return <span>Let's say Hello World!</span>;
};

export default forwardRef(SayHelloWorld);
