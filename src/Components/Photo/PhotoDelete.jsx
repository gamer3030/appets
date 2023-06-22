// Importa a biblioteca React
import React from 'react';

// Importa o estilo CSS do arquivo './PhotoDelete.module.css'
import styles from './PhotoDelete.module.css';

// Importa a função PHOTO_DELETE do arquivo '../../Api'
import { PHOTO_DELETE } from '../../Api';

// Importa o hook useFetch do arquivo '../../Hooks/useFetch'
import useFetch from '../../Hooks/useFetch';

// Declaração do componente PhotoDelete
const PhotoDelete = ({ id }) => {
  // Utiliza o hook useFetch para obter o estado 'loading' e a função 'request'
  const { loading, request } = useFetch();

  // Função assíncrona que é chamada quando o botão de deletar é clicado
  async function handleClick() {
    // Exibe um diálogo de confirmação para o usuário
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      // Chama a função PHOTO_DELETE passando o ID da foto para obter a URL e as opções de requisição
      const { url, options } = PHOTO_DELETE(id);
      // Realiza a requisição utilizando a função 'request' obtida do hook useFetch
      const { response } = await request(url, options);
      // Se a resposta da requisição for OK, recarrega a página
      if (response.ok) window.location.reload();
    }
  }

  // Retorna o JSX do componente PhotoDelete
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

// Exporta o componente PhotoDelete como o default export do módulo
export default PhotoDelete;
