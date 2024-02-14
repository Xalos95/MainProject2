import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import TravelDetails from './components/TravelDetails';
import Receipt  from './components/UserReceipt';
import Error from './components/Error';
import UserLogin from './components/UserLogin';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/travel');
        // Assuming backend route is /travel/data
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Travel Details</h1>
    //     <ul>
    //       {data.map(item => (
    //         <li key={item.id}>{item.name}</li>
    //       ))}
    //     </ul>
    //   </header>
    // </div>

    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/travel/:name" component={TravelDetails} />
          <Route exact path="/travel/login" component={UserLogin} />
          <Route exact path="/travel/:name/receipt" component={Receipt} />
          <Route component={Error} /> {/* For 404 errors */}
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
