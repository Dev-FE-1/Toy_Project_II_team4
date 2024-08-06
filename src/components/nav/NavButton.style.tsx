import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export const MUIButton = muiStyled(Button)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  transition: all 0.3s ease;
  flex: 1;
  height: 80px;
  min-width: 0;
  background-color: ${(props) => (props.selected ? 'var(--color-pri)' : 'transparent')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};

  &:hover,
  &:active {
    background-color: var(--color-pri);
    color: var(--color-white);
  }
`;

export const TextBox = muiStyled(Box)`
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

export const IconWrapper = muiStyled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  & svg {
    font-size: 3rem;
  }
`;

export const LinkRoute = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
`;
