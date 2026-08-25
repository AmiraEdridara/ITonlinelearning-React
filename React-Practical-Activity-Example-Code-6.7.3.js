// Difference: the stylesheet is imported here and the other components are
// actually placed, rather than left as a comment.

import React from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Output from './components/Output';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <UserInput />
      <Output />
    </div>
  );
}

export default App;
