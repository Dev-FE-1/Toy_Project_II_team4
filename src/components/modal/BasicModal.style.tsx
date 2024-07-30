import Box from '@mui/material/Box';
import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const ModalMobileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24px;
  background-color: #fff;
`;

export const CloseButton = muiStyled(Box)`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
