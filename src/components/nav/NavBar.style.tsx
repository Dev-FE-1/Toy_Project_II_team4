import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

export const MyAppBar = styled(AppBar)`
  position: fixed;
  top: calc(100% - 80px);
  width: 100vw;
  height: 80px;
`;

export const MyToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: #ffff;
  flex-grow: 1, calc(100% / 5);
  padding-right: 0;
  padding-left: 0;
  @media (min-width: 600px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;
