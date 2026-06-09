import { useEffect, useState, useContext } from "react";
import AppLoader from "./components/app-loader/app-loader";
import NavigationComponent from "./navigation";
import useScrollListener from "./utils/listeners/scroll";
import { Context } from "./utils/context/context";
import "./App.css";

function App() {
  useScrollListener();

  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { getFeatureFlag, isFeatureFlagsLoading } = useContext(Context);

  const appLoaderEnabled = getFeatureFlag("app-loader", true);

  useEffect(() => {
    // Loading feature flags
    if (isFeatureFlagsLoading) {
      return;
    }

    // Feature flag disabled -> skip loader entirely
    if (!appLoaderEnabled) {
      setIsLoading(false);
      return;
    }

    // Feature flags loaded -> start fade out animation
    setIsFadingOut(true);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(removeTimer);
  }, [isFeatureFlagsLoading, appLoaderEnabled]);

  return (
    <>
      {isLoading && <AppLoader isFadingOut={isFadingOut} />}
      {!isLoading && <NavigationComponent />}
    </>
  );
}

export default App;