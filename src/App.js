import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';


const routes = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/route2',
    name: 'Route 2',
  },
  {
    id: 2,
    path: '/moreroutes',
    name: 'More Routes',
  },
];

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Nav title="App Title Here" routes={routes} />
        <Routes>
          <Route path="/" element={<p>Home Page</p>} />
          <Route path="/route2" element={<p>Another Page</p>} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
