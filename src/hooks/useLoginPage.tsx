// import { login } from './login';
import { login } from '../slices/authSlice';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../api/firebaseApp';
import { useState } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';

const validate = {
  emailEmty: (email: string) => email.length === 0,
  emailPattern: (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
  passwordEmpty: (password: string) => password.length === 0,
  passwordLength: (password: string) => password.length >= 8,
};

interface IFormInput {
  email: string;
  password: string;
}

export function useLoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>({
    defaultValues: {
      email: 'jihoon@sajo.com',
      password: '12345678',
    },
    mode: 'onChange',
  });
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);

  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

  const handleLogin: SubmitHandler<FieldValues> = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  const emailHelperText = () => {
    if (isEmailEmpty || errors.email) {
      return '이메일 형식으로 입력해주세요 예) "example@gmail.com"';
    }
  };

  const passwordHelperText = () => {
    if (isPasswordEmpty || errors.password) {
      return '비밀번호는 8자 이상이어야 합니다.';
    }
  };

  const checkEmailEmpty = (e: any) => {
    setIsEmailEmpty(validate.emailEmty(e.target.value));
  };

  const checkPasswordEmpty = (e: any) => {
    setIsPasswordEmpty(validate.passwordEmpty(e.target.value));
  };

  const isLoginButtonDisabled = useMemo(() => {
    if (isEmailEmpty || isPasswordEmpty || errors.email || errors.password || loading) {
      return 'disabled';
    }
  }, [isEmailEmpty, isPasswordEmpty, errors.email, errors.password, loading]);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/home');
      }
    });
  }, []);

  useEffect(() => {
    const email = getValues('email');
    const password = getValues('password');
    setIsEmailEmpty(validate.emailEmty(email));
    setIsPasswordEmpty(validate.passwordEmpty(password));
  }, []);

  return {
    handleLogin,
    handleSubmit,
    emailHelperText,
    passwordHelperText,
    checkEmailEmpty,
    checkPasswordEmpty,
    isLoginButtonDisabled,
    errors,
    control,
    loading,
  };
}
