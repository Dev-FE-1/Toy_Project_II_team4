import NavBar from './components/nav/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
