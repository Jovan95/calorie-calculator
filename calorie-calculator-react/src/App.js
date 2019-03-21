import React from 'react';
import { Route } from 'react-router-dom';
import HomePage form './components/pages/HomePage';

const App = () => <div>
  <Route path="/" exact component={HomePage} />
</div>;

export default App;
