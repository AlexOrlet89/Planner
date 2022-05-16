import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Planner from './views/Planner';
import Header from './components/Header/Header';
import Entry from './views/Entry';

import './App.css';
import { PlannerContext } from './context/PlannerContext';

export default function App() {
  return (
    <>
      <PlannerContext.Provider
        value={{
          entries,
          addEntry,
          getEntry,
        }}
      >
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/entries/:id">
              <Entry />
            </Route>
            <Route path="/entries">
              <Planner />
            </Route>
            <Route path="/">
              <Redirect to="/entries" />
            </Route>
          </Switch>
        </BrowserRouter>
      </PlannerContext.Provider>
    </>
  );
}
