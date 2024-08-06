import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/DashboardPage.tsx';
import SalaryListPage from '../pages/salaryList/SalaryListPage.tsx';
import SalaryAdjustment from '../pages/salaryAdjustment/SalaryAdjustment.tsx';
import SalaryDetailPage from '../pages/salaryDetail/SalaryDetailPage.tsx';
import CalendarPage from '../pages/Calendar/CalendarPage.tsx';
import { navbarLinks } from '../components/nav/NavLinks.tsx';
import AppLayout from '../layout/AppLayout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: navbarLinks.home.link,
        element: <Dashboard />,
      },
      {
        path: navbarLinks.payments.link,
        element: <SalaryListPage />,
      },
      {
        path: navbarLinks.adjustSalary.link,
        element: <SalaryAdjustment />,
      },
      {
        path: navbarLinks.calendar.link,
        element: <CalendarPage />,
      },
      {
        path: navbarLinks.myPage.link,
        element: <h1>마이페이지 컴포넌트</h1>,
      },
      {
        path: '/salary-detail/:id',
        element: <SalaryDetailPage />,
      },
    ],
  },
]);
