import React, { useState, useEffect } from 'react';
import '../../assets/styles/parallax-objects/shape-objects.scss'
import '../../assets/styles/parallax-objects/parallax.scss'

function Parallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{position: 'relative'}}>

      <div
        class="parallax"
        style={{right: '20vw', transform: `translateY(${scrollY * 0.02}vw)`}}
      >
        <div class="line"/>
      </div>

      <div
        class="parallax"
        style={{right: '20vw', marginTop: '1.5vw', transform: `translateY(${scrollY * 0.02}vw)`}}
      >
        <div class="line"/>
      </div>

      <div
        class="parallax"
        style={{right: '30vw', transform: `translateY(${scrollY * 0.012}vw)`}}
      >
        <div class="circle"/>
      </div>

      <div
        class="parallax"
        style={{right: '35vw', transform: `translateY(${scrollY * 0.028}vw)`}}
      >
        <div class="parallelogram"/>
      </div>

      <div
        class="parallax"
        style={{left: '20vw', transform: `translateY(${scrollY * 0.025}vw)`}}
      >
        <div class="line-2"/>
      </div>
      <div
        class="parallax"
        style={{left: '20vw', marginLeft: '1vw',transform: `translateY(${scrollY * 0.025}vw)`}}
      >
        <div class="line-2"/>
      </div>

      <div
        class="parallax"
        style={{left: '15vw', transform: `translateY(${scrollY * 0.020}vw)`}}
      >
        <div class="parallelogram"/>
      </div>

      <div
        class="parallax"
        style={{left: '30vw', transform: `translateY(${scrollY * 0.015}vw)`}}
      >
        <div class="circle"/>
      </div>
    </div>
  );
}

export default Parallax;