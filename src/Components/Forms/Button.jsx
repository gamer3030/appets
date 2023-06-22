import React from 'react';
import styles from './Button.module.css';

// Importa o React e o arquivo de estilos para o componente Button

const Button = ({ children, ...props }) => {
  // Define o componente Button que recebe a propriedade 'children' e outras propriedades

  return (
    <button {...props} className={styles.button}>
      {/* Renderiza um elemento <button> com todas as propriedades passadas e a classe CSS "button" */}

      {children}
      {/* Renderiza o conteúdo dentro do elemento <button>, que é passado como 'children' */}
    </button>
  );
};

export default Button;
// Exporta o componente Button como padrão para ser usado em outros arquivos
