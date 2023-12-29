import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="text" name="email" {...register("email", {required: 'Se requiere mail',})} />
        {/* {errors.email && <p>{errors.email.message}</p>} */}
      </div>

      <div>
        <label>Contraseña:</label>
        <input type="password" name="password" {...register('password',{ required: 'Se requiere contraseña' })} />
        {/* {errors.password && <p>{errors.password.message}</p>} */}
      </div>
      <br></br>

      <div>
        <label>Empresa:</label>
        <input type="text" name="empresa" {...register('empresa',{ required: 'Se requiere empresa' })} />
        {/* {errors.empresa && <p>{errors.empresa.message}</p>} */}
      </div>

      <div>
        <label>Tipo de Empresa:</label>
        <select name="tipoEmpresa" {...register('tipoEmpresa',{ required: 'Se requiere seleccionar el tipo de empresa' })}>
          <option value="Contructora">Constructora</option>
          <option value="Inmobiliaria">Inmobiliaria</option>
          <option value="Constructora/Inmobiliaria">Constructora/Inmobiliaria</option>
        </select>
        {/* {errors.tipoEmpresa && <p>{errors.tipoEmpresa.message}</p>} */}
      </div>

      <div>
        <label>Representante:</label>
        <input type="text" name="representante" {...register('representante',{ required: 'Se requiere un representante' })} />
        {/* {errors.representante && <p>{errors.representante.message}</p>} */}
      </div>

      <button type="submit" onClick={useNavigate('/profile', { data: Object.values(register) })}>Sign Up</button>
    </form>
  );
};

export default SignupForm;
