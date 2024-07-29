import './App.css';
import NavBar from './components/nav/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Dashboard />
      <NavBar />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
