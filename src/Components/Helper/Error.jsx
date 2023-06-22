import React from 'react';

// Importa o React

const Error = ({ error }) => {
  // Define o componente Error que recebe a propriedade 'error'

  if (!error) return null;
  // Verifica se a propriedade 'error' é falsa ou vazia
  // Se for, retorna null para não renderizar nada

  return <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>;
  // Retorna um parágrafo com o estilo inline definido
  // O texto do parágrafo será o valor da propriedade 'error'
};

export default Error;
// Exporta o componente Error como padrão para ser usado em outros arquivos
