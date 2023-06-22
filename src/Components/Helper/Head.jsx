import React from 'react';

// Importa o React

const Head = (props) => {
  // Define o componente Head que recebe as propriedades 'title' e 'description'

  React.useEffect(() => {
    // Define um efeito colateral que será executado após a renderização do componente

    document.title = props.title + ' | Dogs';
    // Define o título da página como o valor da propriedade 'title' concatenado com ' | Dogs'

    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
    // Seleciona o elemento meta com o atributo name='description' e define o seu conteúdo como o valor da propriedade 'description'
    // Se a propriedade 'description' não estiver definida, define o conteúdo como uma string vazia
  }, [props]);
  // Define que o efeito colateral deve ser executado sempre que houver uma alteração nas propriedades 'props'

  return <></>;
  // Retorna um fragmento vazio, pois o componente Head não renderiza nada visualmente
};

export default Head;
// Exporta o componente Head como padrão para ser usado em outros arquivos
