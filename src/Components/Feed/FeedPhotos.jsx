import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  // Importa o React, o componente FeedPhotosItem e outros recursos necessários
  // Importa também estilos específicos do componente FeedPhotos

  const { data, loading, error, request } = useFetch();
  // Utiliza o hook personalizado useFetch, que retorna um objeto contendo 'data', 'loading', 'error' e 'request'

  React.useEffect(() => {
    async function fetchPhotos() {
      // Define uma função assíncrona fetchPhotos que será executada quando ocorrerem mudanças em 'request', 'user', 'page' ou 'setInfinite'

      const total = 6;
      // Define a variável 'total' com o valor 6, que representa o número total de fotos a serem buscadas

      const { url, options } = PHOTOS_GET({ page, total, user });
      // Chama a função PHOTOS_GET, que retorna a URL e as opções para a requisição de busca de fotos,
      // passando os parâmetros 'page', 'total' e 'user' para a função

      const { response, json } = await request(url, options);
      // Faz a requisição HTTP utilizando a função 'request' passando a URL e as opções

      if (response && response.ok && json.length < total) setInfinite(false);
      // Verifica se a resposta da requisição é válida e se o número de fotos retornadas é menor do que o valor 'total'
      // Se sim, chama a função 'setInfinite' passando o valor 'false', indicando que não há mais fotos para carregar
    }

    fetchPhotos();
    // Chama a função fetchPhotos para buscar as fotos ao montar o componente e sempre que houver mudanças em 'request', 'user', 'page' ou 'setInfinite'
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  // Se houver um erro, renderiza o componente Error passando o erro como propriedade

  if (loading) return <Loading />;
  // Se estiver carregando os dados, renderiza o componente Loading

  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {/* Renderiza um elemento <ul> com as classes CSS "feed" e "animeLeft" */}
        {data.map((photo) => (
          // Mapeia cada foto dos dados retornados
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
          // Renderiza um componente FeedPhotosItem para cada foto,
          // passando a chave 'key' como 'photo.id' e as demais propriedades
        ))}
      </ul>
    );
  else return null;
  // Se não houver dados, retorna 'null'
};

export default FeedPhotos;
// Exporta o componente FeedPhotos como padrão para ser usado em outros arquivos
