import React, {
  createContext,
  useRef,
  useState,
  useEffect,
} from "react";
import useFirebaseActions from "../../helpers/firebase/actions";

export const Context = createContext();

export const ContextProvider = ({ initials, children }) => {
  const { getDataFromCollection } = useFirebaseActions();

  const sectionRefs = useRef(new Array());

  const [revealScrollTop, setRevealScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");

  const [featureFlags, setFeatureFlags] = useState({});
  const [isFeatureFlagsLoading, setIsFeatureFlagsLoading] = useState(true);

  useEffect(() => {
    loadFeatureFlags();
  }, []);

  const loadFeatureFlags = async () => {
    try {
      const flags = await getDataFromCollection("feature-flag");
      const mappedFlags = {};

      flags?.forEach((flag) => {
        const [key, value] = Object.entries(flag)[0];
        mappedFlags[key] = value;
      });

      setFeatureFlags(mappedFlags);
    } catch (error) {
      console.error("Failed to load feature flags", error);
    } finally {
      setIsFeatureFlagsLoading(false);
    }
  };

  const getFeatureFlag = (
    key,
    defaultValue = false
  ) => featureFlags[key] ?? defaultValue;

  return (
    <Context.Provider
      value={{
        sectionRefs,
        activeSection,
        setActiveSection,
        revealScrollTop,
        setRevealScrollTop,

        // Feature flags
        featureFlags,
        isFeatureFlagsLoading,
        getFeatureFlag,
      }}
    >
      {children}
    </Context.Provider>
  );
};