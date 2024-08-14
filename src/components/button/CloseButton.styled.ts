import styled, { css } from 'styled-components';

export const CloseButtonStyle = css`
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

export const CloseButton = styled.button`
  ${CloseButtonStyle}
`;
