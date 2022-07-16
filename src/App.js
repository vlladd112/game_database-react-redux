import React from "react";
// Components and pages
import Home from './pages/Home';
import Nav from './components/Nav';
// Import styles
import GlobalStyles from "./components/GlobalStyles";
// React router
import { Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <div>
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Home />} />
        </Routes>
          

        
    </div>
  );
}

export default App;
