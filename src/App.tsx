import { useState } from 'react';
import Layouts from './layout';
import './App.css';

function App(props: any) {
  const { children } = props
  return (
    <div className="App">
      <Layouts />
    </div>
  );
}

export default App;
