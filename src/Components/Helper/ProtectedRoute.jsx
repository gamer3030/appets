// Importa a biblioteca React, o contexto UserContext e o componente Navigate do react-router-dom.
import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

// Declaração do componente ProtectedRoute.
const ProtectedRoute = ({ children }) => {
  // Obtém o valor do login do contexto UserContext.
  const { login } = React.useContext(UserContext);

  // Verifica se o usuário está logado e renderiza o conteúdo apropriado.
  if (login === true) {
    return children; // Retorna os componentes filhos (conteúdo protegido).
  } else if (login === false) {
    return <Navigate to="/login" />; // Redireciona para a página de login.
  } else {
    return <></>; // Retorna um fragmento vazio enquanto o estado do login está sendo carregado.
  }
};

// Exporta o componente ProtectedRoute como o default export do módulo.
export default ProtectedRoute;
