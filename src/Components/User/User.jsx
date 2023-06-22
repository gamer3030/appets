// Importa a biblioteca React
import React from 'react';

// Importa o componente UserHeader do arquivo './UserHeader'
import UserHeader from './UserHeader';

// Importa os componentes Routes e Route do módulo 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

// Importa o componente Feed do arquivo '../Feed/Feed'
import Feed from '../Feed/Feed';

// Importa o componente UserPhotoPost do arquivo './UserPhotoPost'
import UserPhotoPost from './UserPhotoPost';

// Importa o componente UserStats do arquivo './UserStats'
import UserStats from './UserStats';

// Importa o contexto UserContext do arquivo '../../UserContext'
import { UserContext } from '../../UserContext';

// Importa o componente NotFound do arquivo '../NotFound'
import NotFound from '../NotFound';

// Importa o componente Head do arquivo '../Helper/Head'
import Head from '../Helper/Head';

// Declaração do componente User
const User = () => {
  // Obtém o contexto UserContext e desestrutura a propriedade 'data'
  const { data } = React.useContext(UserContext);

  // Retorna o JSX do componente User
  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

// Exporta o componente User como o default export do módulo
export default User;
