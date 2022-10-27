import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header/Header';
import NumericalFilterList from './components/NumericalFilterList';

function App() {
  return (
    <div>
      <Header />
      <NumericalFilterList />
      <Table />
    </div>
  );
}

export default App;
