import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './CrudFive/Home';
import Create from './CrudFive/Create';
import Edit from './CrudFive/Edit';

function App() {
  return (
    <div className="App">
      {/* ********************************************************************************** */}
      {/* * crud five starts */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
        </Routes>
      </Router> */}
      {/* ********************************************************************************** */}
      {/* * crud five ends */}
      {/* ********************************************************************************** */}
      {/* * crud four starts */}
      {/* <Home></Home> */}
      {/* ********************************************************************************** */}
      {/* * crud four ends */}

      {/* ********************************************************************************** */}
      {/* * crud three starts */}
      {/* <Home></Home> */}
      {/* ********************************************************************************** */}
      {/* * crud three ends */}


      {/* ********************************************************************************** */}
      {/* * crud three starts */}

      {/* ********************************************************************************** */}
      {/* * crud two starts */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </Router> */}

      {/* crud two end
     ********************************************************************************** */}

      {/* crud one start
     ********************************************************************************** */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </Router>
      {/* crud one end
     ********************************************************************************** */}
    </div>
  );
}

export default App;

