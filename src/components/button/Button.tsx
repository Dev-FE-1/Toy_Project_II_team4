import StyledButton from './Button.styled';
//btnType의 경우 outlined로 타입을 넣어주지 않을 경우 기본 버튼은 primary
//size의 경우 sm:기본 버튼, md: 로그인 버튼 
//<Btn size='md' label='확인'/>
//<Btn round size='sm' label='신청하기'/> round 속성은 동그란 모양의 버튼
//<Btn disabled round size='sm' label='비활성화'/>

type ButtonProps = {
  label: string
  btntype?: string
  size: 'sm' | 'md'
  round?:boolean
  disabled?:boolean
};

export default function Btn({btntype, size, label, round=false, disabled=false} : ButtonProps){
  return (
    <StyledButton
      variant="outlined"
      btntype={btntype}
      size={size}
      round={round}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
}