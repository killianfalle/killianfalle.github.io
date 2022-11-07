import React, { useContext } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Context } from "../../utils/context/context";

const ScrollToTop = () => {
  const {revealScrollTop} = useContext(Context);
  const executeScroll = () => window.scrollTo(0, 0);

  console.log(revealScrollTop)

  return (
    <div className={`scroll-to-top ${!revealScrollTop ? "hidden" : "block"}`} onClick={executeScroll}>
      <ArrowUpwardIcon className="icon" sx={{width: '3vw', height: '3vw'}}/>
    </div>
  );
};

export default ScrollToTop;