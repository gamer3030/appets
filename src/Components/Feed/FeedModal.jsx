import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { PHOTO_GET } from '../../Api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  // Importa o React, estilos específicos do componente FeedModal e outros recursos necessários
  // Importa também o hook personalizado useFetch, o componente Error, o componente Loading, o PHOTO_GET e o componente PhotoContent

  const { data, error, loading, request } = useFetch();
  // Utiliza o hook personalizado useFetch, que retorna um objeto contendo 'data', 'error', 'loading' e 'request'

  React.useEffect(() => {
    // Define um efeito colateral que será executado sempre que houver mudanças em 'photo' ou 'request'

    const { url, options } = PHOTO_GET(photo.id);
    // Chama a função PHOTO_GET, que retorna a URL e as opções para a requisição de busca de uma única foto,
    // passando o parâmetro 'photo.id' para a função

    request(url, options);
    // Faz a requisição HTTP utilizando a função 'request' passando a URL e as opções
  }, [photo, request]);

  function handleOutsideClick(event) {
    // Define uma função 'handleOutsideClick' que será chamada quando houver um clique fora do conteúdo do modal

    if (event.target === event.currentTarget) setModalPhoto(null);
    // Verifica se o alvo do clique é exatamente o próprio modal e chama a função 'setModalPhoto' passando 'null' para fechar o modal
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {/* Renderiza um elemento <div> com a classe CSS "modal" e atribui a função 'handleOutsideClick' ao evento 'onClick' */}
      {error && <Error error={error} />}
      {/* Se houver um erro, renderiza o componente Error passando o erro como propriedade */}
      {loading && <Loading />}
      {/* Se estiver carregando os dados, renderiza o componente Loading */}
      {data && <PhotoContent data={data} />}
      {/* Se houver dados, renderiza o componente PhotoContent passando os dados como propriedade */}
    </div>
  );
};

export default FeedModal;
// Exporta o componente FeedModal como padrão para ser usado em outros arquivos
