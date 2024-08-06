import { login } from './login';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../api/firebaseApp';

interface IFormInput {
  email: string;
  password: string;
}

export function useLoginPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
  });

  const handleLogin: SubmitHandler<FieldValues> = (form) => {
    console.log(form.email, form.password);
    login(form.email, form.password);
  };

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/home');
      }
    });
  }, []);

  return {
    handleLogin,
    register,
    handleSubmit,
    errors,
    control,
  };
}
