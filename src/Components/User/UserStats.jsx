// Importa a biblioteca React
import React from 'react';

// Importa o componente Head do arquivo '../Helper/Head'
import Head from '../Helper/Head';

// Importa o hook useFetch do arquivo '../../Hooks/useFetch'
import useFetch from '../../Hooks/useFetch';

// Importa a constante STATS_GET do arquivo '../../Api'
import { STATS_GET } from '../../Api';

// Importa o componente Loading do arquivo '../Helper/Loading'
import Loading from '../Helper/Loading';

// Importa o componente Error do arquivo '../Helper/Error'
import Error from '../Helper/Error';

// Importa o componente UserStatsGraphs de forma lazy do arquivo './UserStatsGraphs'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

// Declaração do componente UserStats
const UserStats = () => {
  // Utiliza o hook useFetch para gerenciar a requisição dos dados
  const { data, error, loading, request } = useFetch();

  // Utiliza o useEffect para realizar a requisição dos dados quando o componente for montado ou o hook 'request' mudar
  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  // Condições para renderização condicional do componente com base no estado de loading, error e data
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      // Utiliza React.Suspense para renderizar o componente UserStatsGraphs de forma lazy
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

// Exporta o componente UserStats como o default export do módulo
export default UserStats;
