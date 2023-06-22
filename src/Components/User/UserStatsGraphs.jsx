// Importa a biblioteca React
import React from 'react';

// Importa o módulo de estilos CSS específico para o componente UserStatsGraphs
import styles from './UserStatsGraphs.module.css';

// Importa os componentes VictoryPie, VictoryChart e VictoryBar do módulo 'victory'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

// Declaração do componente UserStatsGraphs, que recebe a propriedade 'data'
const UserStatsGraphs = ({ data }) => {
  // Declaração de estados utilizando o React.useState
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  // Utiliza o React.useEffect para atualizar o estado do componente quando a propriedade 'data' muda
  React.useEffect(() => {
    // Converte os dados da propriedade 'data' em um novo formato adequado para os gráficos
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    // Calcula o total de acessos somando os valores da propriedade 'acessos' de cada item em 'data'
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );

    // Atualiza o estado 'graph' com os dados formatados para os gráficos
    setGraph(graphData);
  }, [data]);

  // Retorno do componente UserStatsGraphs
  return (
    <section className={`${styles.graph} animeLeft`}>
      {/* 
        Renderiza um elemento <div> com as classes de estilo 'total' e 'graphItem',
        exibindo o total de acessos.
      */}
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      {/* 
        Renderiza um elemento <div> com a classe de estilo 'graphItem',
        contendo um gráfico de pizza (VictoryPie) baseado nos dados do estado 'graph'.
      */}
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>

      {/* 
        Renderiza um elemento <div> com a classe de estilo 'graphItem',
        contendo um gráfico de barras (VictoryBar) baseado nos dados do estado 'graph'.
      */}
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

// Exporta o componente UserStatsGraphs como o default export do módulo
export default UserStatsGraphs;
