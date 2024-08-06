import TextField from '@mui/material/TextField';
import { SxProps } from '@mui/system';
import { TextFieldProps } from '@mui/material/TextField';
export interface TextInputFieldProps extends Omit<TextFieldProps, 'children'> {
  label?: string; // 타이틀
  variant?: 'standard' | 'filled' | 'outlined';
  defaultValue?: string; // 기본값
  error?: boolean; // 에러 필드인지의 유무
  helperText?: string; // 하단 추가 메세지 (보통 에러 메세지)
  width?: string; // 입력 필드 넓이
  noValidate?: boolean; //form의 기본 브라우저 유효성 검사를 비활성화
  autoComplete?: string; //자동 완성 기능
  sx?: SxProps; // mui 스타일 속성
}

export default function TextInputField({
  label = 'Label',
  variant = 'standard',
  defaultValue = '',
  error = false,
  helperText = '',
  sx,
  ...props
}: TextInputFieldProps) {
  return (
    <TextField
      error={error}
      id="custom-input-text-field"
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      variant={variant}
      sx={sx}
      {...props}
    />
  );
}

// 텍스트 입력 필드 컴포넌트 사용방법
// 현재 텍스트 입력 필드 사용 페이지는 로그인 페이지에 달력 일정 추가 시, 제목 정도로 보입니다.
// 따라서 현재 지정한 속성들 중 불필요한 내용들이 많아보이나, 혹시 모르니 유지하고 추후 삭제하겠습니다.
{
  /*
  1. import TextInputField from './components/textInputField/TextInputField';

  2. <TextInputField
label="Username"
variant="outlined"
defaultValue="John Doe"
error={true}
helperText="Username is required"
width="30ch"
/> */
}
