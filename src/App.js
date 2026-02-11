import { useEffect, useState } from "react";
import AppLoader from "./components/app-loader/app-loader";
import NavigationComponent from "./navigation";
import useScrollListener from "./utils/listeners/scroll";
import "./App.css";

function App() {
  useScrollListener();

  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Loader visible duration
    const loadTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    // Remove loader after fade animation
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // must match CSS duration

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {isLoading && <AppLoader isFadingOut={isFadingOut} />}
      {!isLoading && <NavigationComponent />}
    </>
  );
}

export default App;