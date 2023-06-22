import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

// Importa o React, o arquivo de estilos para o componente FeedPhotosItem
// e o componente Image de um diretório Helper

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  // Define o componente FeedPhotosItem que recebe as propriedades 'photo' e 'setModalPhoto'

  function handleClick() {
    setModalPhoto(photo);
  }

  // Define uma função chamada handleClick que é executada quando o elemento <li> é clicado.
  // A função setModalPhoto é chamada com o parâmetro 'photo', passando o objeto de foto como argumento.

  return (
    <li className={styles.photo} onClick={handleClick}>
      {/* Renderiza um elemento <li> com a classe CSS "photo" */}

      <Image src={photo.src} alt={photo.title} />
      {/* Renderiza um componente Image com a propriedade 'src' recebendo o valor de 'photo.src'
          e a propriedade 'alt' recebendo o valor de 'photo.title' */}

      <span className={styles.visualizacao}>{photo.acessos}</span>
      {/* Renderiza um elemento <span> com a classe CSS "visualizacao" e o conteúdo de 'photo.acessos' */}
    </li>
  );
};

export default FeedPhotosItem;
// Exporta o componente FeedPhotosItem como padrão para ser usado em outros arquivos
