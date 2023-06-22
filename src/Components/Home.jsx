// Importa a biblioteca React
import React from 'react';

// Importa o componente Feed do diretório './Feed/Feed'
import Feed from './Feed/Feed';

// Importa o componente Head do diretório './Helper/Head'
import Head from './Helper/Head';

// Declaração do componente Home
const Home = () => {
  // Retorno do componente Home
  return (
    <section className="container mainContainer">
      {/* 
        Renderiza o componente Head com as seguintes props:
        - title: "Fotos"
        - description: "Home do site Dogs, com o feed de fotos."
      */}
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />

      {/* 
        Renderiza o componente Feed
      */}
      <Feed />
    </section>
  );
};

// Exporta o componente Home como o default export do módulo
export default Home;
