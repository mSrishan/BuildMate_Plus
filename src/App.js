import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginPage} />
          {/* Add routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
