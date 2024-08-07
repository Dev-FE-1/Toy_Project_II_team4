import * as Styled from './LoginPage.styled';
import { useLoginPage } from './useLoginPage';
import LogoImg from '../../styles/images/sajoLogo.png';
import Btn from '../../components/button/Button';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function LoginPage() {
  const loginPage = useLoginPage(); // TODO 하이오더 컴포넌트 필요

  return (
    <div>
      <Styled.LoginPageContainer>
        <img src={LogoImg} alt="logo" />
        <div className="form__descriptions">{/* <h3>이메일과 비밀번호를 입력해주세요</h3> */}</div>
        <form onSubmit={loginPage.handleSubmit(loginPage.handleLogin)}>
          <Controller
            name="email"
            control={loginPage.control}
            rules={{
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              onChange: loginPage.checkEmailEmpty,
            }}
            render={({ field }) => (
              <TextField
                label="이메일"
                className="form__login_Email"
                {...field}
                variant="standard"
                helperText={loginPage.emailHelperText()}
                autoComplete="on"
                error={loginPage.errors.email ? true : false}
              />
            )}
          />
          <Controller
            name="password"
            control={loginPage.control}
            rules={{
              required: true,
              minLength: 8,
              onChange: loginPage.checkPasswordEmpty,
            }}
            render={({ field }) => (
              <TextField
                className="form__login_Password"
                label="비밀번호"
                {...field}
                variant="standard"
                helperText={loginPage.passwordHelperText()}
                autoComplete="on"
                type="password"
                error={loginPage.errors.password ? true : false}
              />
            )}
          />
          <Btn
            label={`${loginPage.loading ? '로그인 중입니다..,' : '로그인'}`}
            type="submit"
            className={loginPage.isLoginButtonDisabled}
          ></Btn>
        </form>
      </Styled.LoginPageContainer>
    </div>
  );
}
