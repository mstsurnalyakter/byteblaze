import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className='sticky top-0 z-50'>
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

Root.propTypes = {}

export default Root