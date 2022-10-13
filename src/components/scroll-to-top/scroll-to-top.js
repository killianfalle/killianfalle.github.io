import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTop = () => {
  const [reveal, setReveal] = useState(false);
  const executeScroll = () => window.scrollTo(0, 0);

  const scrollFunction = () => {
    if ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)) {
      if(!reveal) setReveal(true)
    } else {
      if(!reveal) setReveal(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction)
  }, []);

  return (
    <div className={`scroll-to-top ${!reveal ? "hidden" : "block"}`} onClick={executeScroll}>
      <KeyboardDoubleArrowUpIcon sx={{width: '3vw', height: '3vw'}}/>
    </div>
  );
};

export default ScrollToTop;