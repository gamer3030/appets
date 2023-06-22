import React from 'react';
import styles from './Input.module.css';

// Importa o React e o arquivo de estilos para o componente Input

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  // Define o componente Input que recebe várias propriedades como argumento

  return (
    <div className={styles.wrapper}>
      {/* Renderiza uma div com a classe CSS "wrapper" */}

      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {/* Renderiza um label com a classe CSS "label" e o texto da propriedade 'label' */}

      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {/* Renderiza um input com a classe CSS "input" e várias propriedades definidas */}

      {error && <p className={styles.error}>{error}</p>}
      {/* Renderiza um parágrafo com a classe CSS "error" se a propriedade 'error' for verdadeira */}
    </div>
  );
};

export default Input;
// Exporta o componente Input como padrão para ser usado em outros arquivos
