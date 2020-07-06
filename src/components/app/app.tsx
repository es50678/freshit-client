import React from 'react';

import { ShoppingList } from '../shopping-list';

interface Props {
  className?: string; // custom classes
}

const App: React.FC<Props> = function (props) {
  const classes = `App ${props.className}`;

  return (
    <div className={classes}>
      <ShoppingList name="James" />
    </div>
  );
}

export { App };
