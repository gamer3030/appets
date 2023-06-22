// Importa a biblioteca React
import React from 'react';

// Importa o hook useParams do módulo 'react-router-dom'
import { useParams } from 'react-router-dom';

// Importa o componente Feed do arquivo '../Feed/Feed'
import Feed from '../Feed/Feed';

// Importa o componente Head do arquivo '../Helper/Head'
import Head from '../Helper/Head';

// Declaração do componente UserProfile
const UserProfile = () => {
  // Utiliza o hook useParams para obter os parâmetros da rota
  const { user } = useParams();

  // Retorna o JSX do componente UserProfile
  return (
    <section className="container mainSection">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

// Exporta o componente UserProfile como o default export do módulo
export default UserProfile;
