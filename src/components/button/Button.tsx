import StyledButton from './Button.styled'

//btnType의 경우 outlined로 타입을 넣어주지 않을 경우 기본 버튼은 primary
//size의 경우 sm:기본 버튼, md: 로그인 버튼

type ButtonProps = {
  label: string
  btntype?: string
  size: 'sm' | 'md'
};

export default function SButton({btntype, size, label} : ButtonProps){
  return (
      <StyledButton
        variant="outlined"
        btntype={btntype}
        size={size}
      >
        {label}
      </StyledButton>
  );
}