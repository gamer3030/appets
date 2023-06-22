// Importa a biblioteca React
import React from 'react';

// Importa o componente UserHeaderNav do arquivo './UserHeaderNav'
import UserHeaderNav from './UserHeaderNav';

// Importa os estilos específicos do componente de um arquivo separado './UserHeader.module.css'
import styles from './UserHeader.module.css';

// Importa o hook useLocation do módulo 'react-router-dom'
import { useLocation } from 'react-router-dom';

// Declaração do componente UserHeader
const UserHeader = () => {
  // Utiliza o hook useState para criar o estado 'title' que armazena o título do cabeçalho
  const [title, setTitle] = React.useState('');

  // Utiliza o hook useLocation para obter a localização atual
  const location = useLocation();

  // Utiliza o hook useEffect para atualizar o título do cabeçalho com base na localização
  React.useEffect(() => {
    const { pathname } = location;

    // Verifica o pathname e define o título correspondente
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  // Retorna o JSX do componente UserHeader
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

// Exporta o componente UserHeader como o default export do módulo
export default UserHeader;
