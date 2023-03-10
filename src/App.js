import logo from './logo.svg';
import './App.css';
import React from 'react';
import PageRouting from './pages/routing/PageRouting';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserFeed } from './pages/feeds/users/UserFeed';

function App() {
  return (
    <React.Fragment>
      <PageRouting />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
