// import * as Styled from './LoginPage.styled';
// import { useLoginPage } from './useLoginPage';
// import LogoImg from '../../styles/images/sajoLogo.png';
// import Btn from '../../components/button/Button';

// export default function LoginPage() {
//   const { register, handleSubmit, handleLogin } = useLoginPage();

//   return (
//     <div>
//       <Styled.LoginPageContainer>
//         <h1>로그인</h1>
//         <img src={LogoImg} alt="logo" />
//         <form onSubmit={handleSubmit(handleLogin)}>
//           <div>
//             <input {...register('email')} type="email" placeholder="이메일" />
//           </div>
//           <div>
//             <input {...register('password')} type="password" placeholder="비밀번호" />
//           </div>
//           <Btn label="로그인" type="submit" />
//         </form>
//       </Styled.LoginPageContainer>
//     </div>
//   );
// }

import * as Styled from './LoginPage.styled';
import { useLoginPage } from './useLoginPage';
import LogoImg from '../../styles/images/sajoLogo.png';
import Btn from '../../components/button/Button';
import { TextField } from '@mui/material';

export default function LoginPage() {
  const { register, handleSubmit, handleLogin, errors } = useLoginPage();

  return (
    <div>
      <Styled.LoginPageContainer>
        <img src={LogoImg} alt="logo" />
        <div className="form__descriptions">
          <h3>이메일과 비밀번호를 입력해주세요</h3>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <TextField
              label="이메일"
              {...register('email')}
              variant="standard"
              helperText="이메일을 입력해주세요"
              autoComplete="on"
              defaultValue={'badaclock@gmail.com'}
              type="email"
              InputProps={{
                style: { fontSize: '16px', height: '40px' },
              }}
            />
          </div>
          <div>
            <TextField
              label="비밀번호"
              {...register('password')}
              variant="standard"
              helperText="비밀번호를 8자 이상 입력해주세요"
              autoComplete="on"
              type="password"
              defaultValue={'12345678'}
              InputProps={{
                style: { fontSize: '16px', height: '40px' },
              }}
            />
          </div>
          <Btn label="로그인" type="submit" />
        </form>
      </Styled.LoginPageContainer>
    </div>
  );
}
