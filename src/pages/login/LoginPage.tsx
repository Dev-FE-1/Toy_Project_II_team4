import * as Styled from './LoginPage.styled';
import { useLoginPage } from '../../hooks/useLoginPage';
import LogoImg from '../../styles/images/sajoLogo.png';
import Btn from '../../components/button/Button';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function LoginPage() {
  const {
    handleSubmit,
    handleLogin,
    control,
    errors,
    emailHelperText,
    passwordHelperText,
    checkEmailEmpty,
    checkPasswordEmpty,
    isLoginButtonDisabled,
    loading,
  } = useLoginPage();

  return (
    <div>
      <Styled.LoginPageContainer>
        <img src={LogoImg} alt="logo" />
        <div className="form__descriptions">{/* <h3>이메일과 비밀번호를 입력해주세요</h3> */}</div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              onChange: checkEmailEmpty,
            }}
            render={({ field }) => (
              <TextField
                label="이메일"
                className="form__login_Email"
                {...field}
                variant="standard"
                helperText={emailHelperText()}
                autoComplete="on"
                error={errors.email ? true : false}
                onLoad={checkEmailEmpty}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              minLength: 8,
              onChange: checkPasswordEmpty,
            }}
            render={({ field }) => (
              <TextField
                className="form__login_Password"
                label="비밀번호"
                {...field}
                variant="standard"
                helperText={passwordHelperText()}
                autoComplete="on"
                type="password"
                error={errors.password ? true : false}
                onLoad={checkPasswordEmpty}
              />
            )}
          />
          <Btn
            label={`${loading ? '로그인 중입니다..,' : '로그인'}`}
            type="submit"
            className={isLoginButtonDisabled}
          ></Btn>
        </form>
      </Styled.LoginPageContainer>
    </div>
  );
}
