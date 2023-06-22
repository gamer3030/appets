import React from 'react';
import styles from './Image.module.css';

// Importa o React e o módulo de estilos CSS do componente

const Image = ({ alt, ...props }) => {
  // Define o componente Image, que recebe as propriedades 'alt' e todas as outras propriedades restantes

  const [skeleton, setSkeleton] = React.useState(true);
  // Cria uma variável de estado chamada 'skeleton' e sua função de atualização 'setSkeleton' usando o useState do React.
  // O valor inicial do 'skeleton' é true, indicando que o esqueleto da imagem deve ser exibido.

  function handleLoad({ target }) {
    // Define a função handleLoad, que será chamada quando a imagem terminar de carregar.
    // Recebe um objeto que contém o evento 'target', que se refere ao elemento da imagem carregada.

    setSkeleton(false);
    // Atualiza o estado 'skeleton' para false, indicando que a imagem terminou de carregar e o esqueleto não deve mais ser exibido.

    target.style.opacity = 1;
    // Define a opacidade do elemento 'target' da imagem como 1, tornando-a totalmente visível.
  }

  return (
    // Renderiza o componente
    <div className={styles.wrapper}>
      {/* Renderiza uma div com a classe CSS 'wrapper' definida no arquivo Image.module.css */}
      {skeleton && <div className={styles.skeleton}></div>}
      {/* Renderiza uma div com a classe CSS 'skeleton' se o estado 'skeleton' for true */}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
      {/* Renderiza um elemento img com a classe CSS 'img' definida no arquivo Image.module.css.
          Adiciona um ouvinte de evento 'onLoad' que chama a função handleLoad quando a imagem terminar de carregar.
          Recebe as propriedades 'alt' e todas as outras propriedades restantes. */}
    </div>
  );
};

export default Image;
