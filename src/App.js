import './App.css';
import NavigationComponent from './navigation';
import useScrollListener from './utils/listeners/scroll';

function App() {
  useScrollListener();

  return (
    <NavigationComponent />
  );
}

export default App;