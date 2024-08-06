import * as Styled from './LoginPage.styled';
import { useLoginPage } from './useLoginPage';
import LogoImg from '../../styles/images/sajoLogo.png';
import Btn from '../../components/button/Button';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
export default function LoginPage() {
  const { handleSubmit, handleLogin, control } = useLoginPage();

  return (
    <div>
      <Styled.LoginPageContainer>
        <img src={LogoImg} alt="logo" />
        <div className="form__descriptions">
          <h3>이메일과 비밀번호를 입력해주세요</h3>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Controller
            name="email"
            control={control}
            defaultValue={'badaclock@gmail.com'}
            render={({ field }) => (
              <TextField
                label="이메일"
                {...field}
                variant="standard"
                helperText="이메일을 입력해주세요"
                type="email"
                autoComplete="on"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue={'12345678'}
            render={({ field }) => (
              <TextField
                label="비밀번호"
                {...field}
                variant="standard"
                helperText="비밀번호를 8자 이상 입력해주세요"
                autoComplete="on"
                type="password"
              />
            )}
          />
          <Btn label="로그인" type="submit" />
        </form>
      </Styled.LoginPageContainer>
    </div>
  );
}

{
  /* <div>
            <TextField
              label="이메일"
              {...register('email')}
              variant="standard"
              helperText="이메일을 입력해주세요"
              autoComplete="on"
              defaultValue={'badaclock@gmail.com'}
              type="email"
            />
          </div> */
}
{
  /* <div>
            <TextField
              label="비밀번호"
              {...register('password')}
              variant="standard"
              helperText="비밀번호를 8자 이상 입력해주세요"
              autoComplete="on"
              type="password"
              defaultValue={'12345678'}
            />
          </div> */
}
