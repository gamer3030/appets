// Importa a biblioteca React
import React from 'react';

// Importa o componente Enviar do arquivo '../../Assets/enviar.svg' como um componente React
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';

// Importa o hook useFetch do arquivo '../../Hooks/useFetch'
import useFetch from '../../Hooks/useFetch';

// Importa o componente Error do arquivo '../Helper/Error'
import Error from '../Helper/Error';

// Importa a função COMMENT_POST do arquivo '../../Api'
import { COMMENT_POST } from '../../Api';

// Importa o estilo CSS do arquivo './PhotoCommentsForm.module.css'
import styles from './PhotoCommentsForm.module.css';

// Declaração do componente PhotoCommentsForm
const PhotoCommentsForm = ({ id, setComments, single }) => {
  // Utiliza o estado 'comment' para armazenar o valor do campo de comentário
  const [comment, setComment] = React.useState('');

  // Utiliza o hook useFetch para obter a função 'request' e o estado 'error'
  const { request, error } = useFetch();

  // Função assíncrona que é chamada quando o formulário é enviado
  async function handleSubmit(event) {
    event.preventDefault();

    // Chama a função COMMENT_POST passando o ID da foto e o objeto com o comentário
    const { url, options } = COMMENT_POST(id, { comment });

    // Realiza a requisição utilizando a função 'request' obtida do hook useFetch
    const { response, json } = await request(url, options);

    // Se a resposta da requisição for OK, limpa o campo de comentário e adiciona o novo comentário ao estado 'setComments'
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  // Retorna o JSX do componente PhotoCommentsForm
  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

// Exporta o componente PhotoCommentsForm como o default export do módulo
export default PhotoCommentsForm;
