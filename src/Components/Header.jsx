// Importa a biblioteca React
import React from 'react';

// Importa o módulo de estilos CSS específico para o componente Header
import styles from './Header.module.css';

// Importa o componente Link do módulo 'react-router-dom'
import { Link } from 'react-router-dom';

// Importa o componente Dogs do arquivo '../Assets/pets.svg'
import { ReactComponent as Dogs } from '../Assets/pets.svg';

// Importa o contexto UserContext do arquivo '../UserContext'
import { UserContext } from '../UserContext';

// Declaração do componente Header
const Header = () => {
  // Obtém o valor da propriedade 'data' do contexto UserContext usando a função useContext do React
  const { data } = React.useContext(UserContext);

  // Retorno do componente Header
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {/* 
          Renderiza um componente Link com a classe de estilo 'logo', redirecionando para a rota '/'
          e com o atributo 'aria-label' definido como 'Dogs - Home'.
          Dentro do componente Link, é renderizado o componente Dogs, que representa o ícone do logo.
        */}
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {/* 
          Verifica se a propriedade 'data' existe.
          Se existir, renderiza um componente Link com a classe de estilo 'login', redirecionando para a rota '/conta',
          e exibe o valor da propriedade 'data.nome' como conteúdo do link.
          Caso contrário, renderiza um componente Link com a classe de estilo 'login', redirecionando para a rota '/login',
          e exibe "Login / Criar" como conteúdo do link.
        */}
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

// Exporta o componente Header como o default export do módulo
export default Header;
