import React from 'react';
import StyledButton from './Button.styled';
import { ButtonProps as MuiButtonProps } from '@mui/joy/Button';
//btnType의 경우 outlined로 타입을 넣어주지 않을 경우 기본 버튼은 primary
//size의 경우 sm:기본 버튼, md: 로그인 버튼
//<Btn label='활성화'/> 예) 기본 버튼
//<Btn round='true' label='신청하기'/> 예) 동그란 모양의 버튼
//<Btn disabled label='비활성화'/> 예) 비활성화 버튼

type ButtonProps = MuiButtonProps &{
  label: React.ReactNode;
  btntype?: string;
  btnsize?: string;
  round?: string;
  disabled?: boolean;
};

export default function Btn({
  btntype,
  label,
  round,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      variant="outlined"
      btntype={btntype}
      round={round}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
  );
}
