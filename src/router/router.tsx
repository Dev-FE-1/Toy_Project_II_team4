import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/DashboardPage.tsx';
import SalaryListPage from '../pages/salaryList/SalaryListPage.tsx';
import SalaryAdjustment from '../pages/salaryAdjustment/SalaryAdjustment.tsx';

import CalendarPage from '../pages/Calendar/CalendarPage.tsx';

import AppLayout from '../layout/AppLayout.tsx';
import { ROUTE_PATHS } from './paths.tsx';
import LoginPage from '../pages/login/LoginPage.tsx';
import { MyPage } from '../pages/myPage/MyPage.tsx';
import SalaryDetailPage from '../pages/salaryDetail/SalaryDetailPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.HOME,
        element: <Dashboard />,
      },
      {
        path: ROUTE_PATHS.PAYMENTS,
        element: <SalaryAdjustment />,
      },
      {
        path: ROUTE_PATHS.ADJUST_SALARY,
        element: <SalaryListPage />,
      },
      {
        path: ROUTE_PATHS.CALENDAR,
        element: <CalendarPage />,
      },
      {
        path: ROUTE_PATHS.MY_PAGE,
        element: <MyPage />,
      },
      {
        path: ROUTE_PATHS.SALARY_DETAIL,
        element: <SalaryDetailPage />,
      },
    ],
  },
]);
