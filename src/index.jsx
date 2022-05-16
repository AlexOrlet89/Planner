import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { PlannerContext } from './context/PlannerContext';

render(
  <PlannerContext.Provider
    value={{
      entries,
      addEntry,
      getEntry,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PlannerContext.Provider>,
  document.getElementById('root')
);
