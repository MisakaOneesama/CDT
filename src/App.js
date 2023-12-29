import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormularioEmpresa from './formularioEmpresa';
import FormularioProyecto from './formularioProyecto';
import SignupForm from './signUp';
import LoginForm from './login';
import ProfileView from './profile';
import outputMadurez from './outputMadurez'
import outputProyecto from './outputProyecto'

const App = () => {
    const { handleSubmit: handleSignupSubmit, register: signupRegister } = useForm();
    const { handleSubmit: handleLoginSubmit, register: loginRegister } = useForm();
    const [user, setUser] = useState(null);
  
    const handleSignup = (data) => {
      console.log('Signup data:', data);
      // Add your signup logic here
      setUser(data); // Set the user data
    };
  
    const handleLogin = (data) => {
      console.log('Login data:', data);
      // Add your login logic here
      setUser(data); // Set the user data
    };
  
    return (
      <Router>
        <Routes>
            <Route
                path="/"
                element={<LoginForm onSubmit={handleLogin} register={loginRegister} />}
            />
            <Route
                path="/signup"
                element={<SignupForm onSignup={handleSignup} register={signupRegister}/>}
            />
            <Route
                path='/Empresa'
                element={<FormularioEmpresa user={user} />}
            />
            <Route
                path='/Proyecto'
                element={<FormularioProyecto user={user} />}
            />
            <Route
                path="/profile"
                element={user ? <ProfileView user={user} /> : null}
            />
            <Route
                path="/outputMadurez"
                element={user ? <outputMadurez user={user} /> : null}
            />
            <Route
                path="/outputProyecto"
                element={user ? <outputProyecto user={user} /> : null}
            />
        </Routes>
      </Router>
    );
};

export default App;
