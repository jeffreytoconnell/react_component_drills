import React from 'react';
import ReactDOM from 'react-dom';
import AddressBook from './components/address-book';
import './index.css';

ReactDOM.render(
  <AddressBook />, // render from dir above
  document.getElementById('root') // root is 'div'
);
