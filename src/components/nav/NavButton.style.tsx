import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const MUIButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  transition: all 0.3s ease;
  flex: 1;
  height: 80px;
  min-width: 0;
  &:hover,
  &:active {
    background-color: var(--color-pri);
    color: #fff;
  }
  color: #333;
`;

export const TextBox = styled(Box)`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100%;
  font-weight: 600;
`;

export const IconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  & svg {
    font-size: 3rem;
  }
`;
