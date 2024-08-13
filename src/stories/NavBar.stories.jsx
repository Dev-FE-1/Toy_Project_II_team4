import NavBar from '../components/nav/NavBar';

// TODO: Import GlobalStyle 컴포넌트 스토리에 GlobalStyle 추가
// TODO: 버튼 포커스 효과, 버튼 가가버 효과, 페이지 이동 효과 기능 추가
import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  decorators: [
    (Story) => {
      const router = createMemoryRouter(
        [
          {
            path: '/',
            element: <Story />,
          },
        ],
        {
          initialEntries: ['/'],
        }
      );

      return <RouterProvider router={router} />;
    },
  ],
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

// export const WithSelectedItem = Template.bind({});
// WithSelectedItem.args = {};
// WithSelectedItem.parameters = {
//   mockData: [
//     {
//       url: '/api/navbar',
//       method: 'GET',
//       status: 200,
//       response: {
//         selected: 'Home',
//       },
//     },
//   ],
// };
