import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Dashboard from './pages/Dashboard/Dashboard';
import TempSalaryAdjustment from './pages/salaryAdjustment/SalaryAdjustment.tsx';
import { navbarLinks } from './components/nav/navLinks.tsx';
import Calendar from './pages/Calendar/Calendar.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: navbarLinks.home.link,
        element: <Dashboard />,
      },
      {
        path: navbarLinks.payments.link,
        element: <h1>급여 정산 페이지 컴포넌트</h1>,
      },
      {
        path: navbarLinks.adjustSalary.link,
        element: <TempSalaryAdjustment />,
      },
      {
        path: navbarLinks.calendar.link,
        element: <Calendar />,
      },
      {
        path: navbarLinks.myPage.link,
        element: <h1>마이페이지 컴포넌트</h1>,
      },
    ],
  },
]);
