import styled, { css } from 'styled-components';

export const ModalWrapperStyle = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24px;
  background-color: #fff;
`;

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

export const ModalContentStyle = css`
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

export const ModalChildrenContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
