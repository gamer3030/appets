// Importa a biblioteca React
import React from 'react';

// Importa os hooks NavLink, useLocation e useNavigate do módulo 'react-router-dom'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// Importa o contexto UserContext do arquivo '../../UserContext'
import { UserContext } from '../../UserContext';

// Importa o componente MinhasFotos do arquivo '../../Assets/feed.svg'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';

// Importa o componente Estatisticas do arquivo '../../Assets/estatisticas.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';

// Importa o componente AdicionarFoto do arquivo '../../Assets/adicionar.svg'
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';

// Importa o componente Sair do arquivo '../../Assets/sair.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg';

// Importa os estilos específicos do componente de um arquivo separado './UserHeaderNav.module.css'
import styles from './UserHeaderNav.module.css';

// Importa o hook useMedia do arquivo '../../Hooks/useMedia'
import useMedia from '../../Hooks/useMedia';

// Declaração do componente UserHeaderNav
const UserHeaderNav = () => {
  // Utiliza o contexto UserContext para obter a função userLogout
  const { userLogout } = React.useContext(UserContext);

  // Utiliza o hook useMedia para verificar se o tamanho da tela é menor que 40rem
  const mobile = useMedia('(max-width: 40rem)');

  // Utiliza o hook useState para criar o estado 'mobileMenu' que controla a exibição do menu mobile
  const [mobileMenu, setMobileMenu] = React.useState(false);

  // Utiliza o hook useNavigate para obter a função de navegação
  const navigate = useNavigate();

  // Utiliza o hook useLocation para obter a localização atual
  const { pathname } = useLocation();

  // Utiliza o hook useEffect para fechar o menu mobile quando a localização muda
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  // Função que lida com o logout do usuário. Chama a função userLogout e navega para a rota '/login'
  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  // Retorna o JSX do componente UserHeaderNav
  return (
    <>
      {/* Renderiza o botão de menu mobile somente quando a tela for menor que 40rem */}
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      {/* Renderiza a navegação */}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        {/* Renderiza o link para a rota '/conta' */}
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        {/* Renderiza o link para a rota '/conta/estatisticas' */}
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>

        {/* Renderiza o link para a rota '/conta/postar' */}
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>

        {/* Renderiza o botão de logout */}
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

// Exporta o componente UserHeaderNav como o default export do módulo
export default UserHeaderNav;
