import React, { useReducer } from 'react';

interface ICart {
  products: string[];
  shipping_value?: number;
}

type CartAction = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT';
};

const AppContext = () => {
  useReducer(
    (state: ICart, action: CartAction) => {
      switch (action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'New Product'],
          };
        default:
          return state;
      }
    },
    {
      products: ['React'],
      shipping_value: 0,
    }
  );

  return <div></div>;
};

export default AppContext;
