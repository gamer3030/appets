// Importa a biblioteca React
import React from 'react';

// Importa o estilo CSS do arquivo './PhotoContent.module.css'
import styles from './PhotoContent.module.css';

// Importa o componente Link do módulo 'react-router-dom'
import { Link } from 'react-router-dom';

// Importa o componente PhotoComments do arquivo './PhotoComments'
import PhotoComments from './PhotoComments';

// Importa o contexto UserContext do arquivo '../../UserContext'
import { UserContext } from '../../UserContext';

// Importa o componente PhotoDelete do arquivo './PhotoDelete'
import PhotoDelete from './PhotoDelete';

// Importa o componente Image do arquivo '../Helper/Image'
import Image from '../Helper/Image';

// Declaração do componente PhotoContent
const PhotoContent = ({ data, single }) => {
  // Obtém o contexto UserContext e atribui a variável 'user'
  const user = React.useContext(UserContext);

  // Desestrutura os dados 'photo' e 'comments' do objeto 'data'
  const { photo, comments } = data;

  // Retorna o JSX do componente PhotoContent
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

// Exporta o componente PhotoContent como o default export do módulo
export default PhotoContent;
