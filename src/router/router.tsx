import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard.tsx';
import SalaryList from '../pages/salaryList/SalaryList.tsx';
import SalaryAdjustment from '../pages/salaryAdjustment/SalaryAdjustment.tsx';
import SalaryDetail from '../pages/salaryDetail/SalaryDetail.tsx';
import Calendar from '../pages/Calendar/Calendar.tsx';
import AppLayout from '../layout/AppLayout.tsx';
import { ROUTE_PATHS } from './paths.tsx';
import LoginPage from '../pages/login/LoginPage.tsx';
import { MyPage } from '../pages/myPage/MyPage.tsx';

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
        path: ROUTE_PATHS.HOME,
        element: <Dashboard />,
      },
      {
        path: ROUTE_PATHS.PAYMENTS,
        element: <SalaryList />,
      },
      {
        path: ROUTE_PATHS.ADJUST_SALARY,
        element: <SalaryAdjustment />,
      },
      {
        path: ROUTE_PATHS.CALENDAR,
        element: <Calendar />,
      },
      {
        path: ROUTE_PATHS.MY_PAGE,
        element: <MyPage />,
      },
      {
        path: ROUTE_PATHS.SALARY_DETAIL,
        element: <SalaryDetail />,
      },
    ],
  },
]);
