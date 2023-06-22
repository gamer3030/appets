// Importa a biblioteca React para utilizar a funcionalidade do React na construção de componentes.
import React from 'react';

// Importa o componente Input do arquivo '../Forms/Input'.
import Input from '../Forms/Input';

// Importa o componente Button do arquivo '../Forms/Button'.
import Button from '../Forms/Button';

// Importa o hook useForm do arquivo '../../Hooks/useForm'.
import useForm from '../../Hooks/useForm';

// Importa o hook useFetch do arquivo '../../Hooks/useFetch'.
import useFetch from '../../Hooks/useFetch';

// Importa a função PASSWORD_LOST do arquivo '../../Api'.
import { PASSWORD_LOST } from '../../Api';

// Importa o componente Error do arquivo '../Helper/Error'.
import Error from '../Helper/Error';

// Importa o componente Head do arquivo '../Helper/Head'.
import Head from '../Helper/Head';

// Declaração do componente LoginPasswordLost.
const LoginPasswordLost = () => {
  // Utiliza o hook useForm para gerenciar o estado do campo de login.
  const login = useForm();

  // Utiliza o hook useFetch para fazer a requisição de recuperação de senha.
  const { data, loading, error, request } = useFetch();

  // Função assíncrona handleSubmit para lidar com o envio do formulário.
  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  // Renderiza o JSX do componente LoginPasswordLost.
  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

// Exporta o componente LoginPasswordLost como o default export do módulo.
export default LoginPasswordLost;
