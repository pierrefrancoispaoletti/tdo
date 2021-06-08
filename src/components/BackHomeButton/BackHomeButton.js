import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './backHomeButton .scss';

const BackHomeButton = () => {
  useEffect(() => {
    const button = document.querySelector('.backHomeButton');
    window.onscroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block';
        button.classList.add('show');
      }
      else {
        button.style.display = 'none';
        button.classList.remove('show');
      }
    };
  });
  return (

    <Link to="/">
      <Button icon="home" size="huge" circular className="backHomeButton" />
    </Link>
  );
};

export default BackHomeButton;
