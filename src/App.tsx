import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Layouts from './layout';
import './App.css';

function App(props: any) {
  const { children } = props
  return (
    <div className="App">
      {/* <Routes>
        {children}
      </Routes> */}
      <Layouts />
    </div>
  );
}

export default App;
