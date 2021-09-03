import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRefactoring from './AppRefactoring';

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRefactoring />
  </React.StrictMode>,
  document.getElementById('root')
);
