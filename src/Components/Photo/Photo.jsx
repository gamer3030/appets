// Importa a biblioteca React para utilizar a funcionalidade do React na construção de componentes.
import React from 'react';

// Importa o hook useParams do react-router-dom para obter os parâmetros da URL.
import { useParams } from 'react-router-dom';

// Importa o hook useFetch do arquivo '../../Hooks/useFetch'.
import useFetch from '../../Hooks/useFetch';

// Importa a função PHOTO_GET do arquivo '../../Api'.
import { PHOTO_GET } from '../../Api';

// Importa o componente Error do arquivo '../Helper/Error'.
import Error from '../Helper/Error';

// Importa o componente Loading do arquivo '../Helper/Loading'.
import Loading from '../Helper/Loading';

// Importa o componente PhotoContent do arquivo './PhotoContent'.
import PhotoContent from './PhotoContent';

// Importa o componente Head do arquivo '../Helper/Head'.
import Head from '../Helper/Head';

// Declaração do componente Photo.
const Photo = () => {
  // Obtém o parâmetro 'id' da URL utilizando o hook useParams.
  const { id } = useParams();

  // Utiliza o hook useFetch para fazer a requisição da foto com o ID específico.
  const { data, loading, error, request } = useFetch();

  // Utiliza o useEffect para fazer a requisição da foto sempre que o ID for alterado.
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  // Renderiza o componente Error se houver um erro na requisição.
  if (error) return <Error error={error} />;

  // Renderiza o componente Loading enquanto a requisição estiver em andamento.
  if (loading) return <Loading />;

  // Renderiza o componente PhotoContent se houver dados da foto disponíveis.
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

// Exporta o componente Photo como o default export do módulo.
export default Photo;
