import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowNavBar = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  const location = useLocation();

  useEffect(() => {
    console.log('this is location', location);
    if (location.pathname === '/') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default MaybeShowNavBar;

