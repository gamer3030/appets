// Importa a biblioteca React para utilizar a funcionalidade do React na construção de componentes.
import React from 'react';

// Importa o contexto UserContext do arquivo '../../UserContext'.
import { UserContext } from '../../UserContext';

// Importa o componente PhotoCommentsForm do arquivo './PhotoCommentsForm'.
import PhotoCommentsForm from './PhotoCommentsForm';

// Importa o estilo CSS do arquivo './PhotoComments.module.css'.
import styles from './PhotoComments.module.css';

// Declaração do componente PhotoComments.
const PhotoComments = (props) => {
  // Utiliza o estado 'comments' para armazenar os comentários. Inicialmente, recebe o valor de 'props.comments'.
  const [comments, setComments] = React.useState(() => props.comments);

  // Cria uma referência para o elemento HTML 'ul' que contém os comentários.
  const commentsSection = React.useRef(null);

  // Obtém o valor do contexto UserContext utilizando o hook useContext.
  const { login } = React.useContext(UserContext);

  // Utiliza o useEffect para executar um efeito sempre que o estado 'comments' for atualizado.
  React.useEffect(() => {
    // Faz o scroll do elemento 'commentsSection' até o final para exibir os comentários mais recentes.
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  // Retorna o JSX do componente PhotoComments.
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {/* Mapeia os comentários e renderiza cada um deles como um elemento 'li' */}
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {/* Renderiza o componente PhotoCommentsForm somente se o usuário estiver logado */}
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

// Exporta o componente PhotoComments como o default export do módulo.
export default PhotoComments;
