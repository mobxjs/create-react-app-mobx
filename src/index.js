import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import './index.css';

ReactDOM.render(
  <App counter={new Counter()} />,
  document.getElementById('root')
);
