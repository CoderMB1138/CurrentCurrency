import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Charty from './components/Chart';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" exact>
          <Charty />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
      </Routes>
    </Router>
  );
};

export default App;
