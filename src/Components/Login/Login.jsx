// Importa a biblioteca React, os componentes necessários do react-router-dom e os componentes relacionados ao login.
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound';

// Declaração do componente Login.
const Login = () => {
  // Obtém o contexto UserContext através do hook useContext.
  const { login } = React.useContext(UserContext);

  // Redireciona para a página de conta se o usuário já estiver logado.
  if (login === true) return <Navigate to="/conta" />;

  // Renderiza o JSX do componente Login.
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

// Exporta o componente Login como o default export do módulo.
export default Login;
