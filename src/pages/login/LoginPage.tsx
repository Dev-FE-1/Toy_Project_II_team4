import * as Styled from './LoginPage.styled';
import { useLoginPage } from './useLoginPage';
import LogoImg from '../../styles/images/sajoLogo.png';
import Btn from '../../components/button/Button';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoginPage() {
  const { handleSubmit, handleLogin, control, errors } = useLoginPage();

  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

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
            // defaultValue="badaclock@gmail.com"
            rules={{
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              onChange: (e) => {
                setIsEmailEmpty(e.target.value.length < 0);
              },
            }}
            render={({ field }) => (
              <TextField
                label="이메일"
                className="form__login_Email"
                {...field}
                variant="standard"
                helperText={
                  isEmailEmpty || errors.email
                    ? '이메일 형식으로 입력해주세요 예) "example@gmail.com"'
                    : ''
                }
                autoComplete="on"
                error={errors.email ? true : false}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            // defaultValue={'12345678'}
            rules={{
              required: true,
              minLength: 8,
              onChange: (e) => {
                setIsPasswordEmpty(e.target.value.length < 0);
              },
            }}
            render={({ field }) => (
              <TextField
                className="form__login_Password"
                label="비밀번호"
                {...field}
                variant="standard"
                helperText={
                  isPasswordEmpty || errors.password ? '비밀번호를 8자 이상 입력해주세요' : ''
                }
                autoComplete="on"
                type="password"
                error={errors.password ? true : false}
              />
            )}
          />
          <Btn
            label="로그인"
            type="submit"
            className={
              isEmailEmpty || isPasswordEmpty || errors.email || errors.password ? 'disabled' : ''
            }
            children={
              <div className="wrapper__loading_spinner">
                <CircularProgress className="form__loading_spinner" />
              </div>
            }
          ></Btn>
        </form>
      </Styled.LoginPageContainer>
    </div>
  );
}
