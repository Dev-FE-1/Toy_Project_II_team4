import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ModalContent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24px;
  background-color: #fff;
`;

export const ModalChildrenContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Wrapper = styled(Box)`
  padding-bottom: 10px;
  width: 100%;
`;

export const closeButton = styled(Box)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
