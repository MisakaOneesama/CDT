import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
  const { register,handleSubmit , errors } = useForm();

  const OnLogin = () => {
    useNavigate('/profile', { data: Object.values(register) });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class='loginInput' >
        <label>Email:</label>
        <input type="text" name="email" {...register('email', { required: 'Se requiere mail' })} />
        {/* {errors.email && <p>{errors.email.message}</p>} */}
      </div>

      <div class='loginInput'>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          {...register('password', {required: 'Se requiere contraseñas' })}
        />
        {/* {errors.password && <p>{errors.password.message}</p>} */}
      </div>

      <button type="submit" onClick={OnLogin}>Log In</button>
      <button onClick={useNavigate('/signup')} ></button>
    </form>
  );
};

export default LoginForm;
