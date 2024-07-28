//import './App.css';
import './styles/global.css';
import NavBar from './components/nav/NavBar';
import SalaryList from './pages/salaryList/SalaryList';

function App() {
  return (
    <>
    <SalaryList/>
      <NavBar />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
