// Importa a biblioteca React
import React from 'react';

// Importa o módulo de estilos CSS específico para o componente Footer
import styles from './Footer.module.css';

// Importa o componente Dogs do arquivo '../Assets/pets.svg'
import { ReactComponent as Dogs } from '../Assets/pets.svg';

// Declaração do componente Footer
const Footer = () => {
  // Retorno do componente Footer
  return (
    <footer className={styles.footer}>
      {/* 
        Renderiza o componente Dogs, que representa o ícone de cachorro.
      */}
      <Dogs />

      {/* 
        Renderiza um parágrafo com o texto "Dogs. Alguns direitos reservados."
      */}
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

// Exporta o componente Footer como o default export do módulo
export default Footer;
