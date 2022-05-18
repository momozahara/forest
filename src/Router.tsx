import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home';
import Contact from './Contact';
import About from './About';

export default () => {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames='fade'
        timeout={300}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
