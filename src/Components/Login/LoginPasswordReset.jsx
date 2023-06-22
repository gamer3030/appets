// Importa a biblioteca React para utilizar a funcionalidade do React na construção de componentes.
import React, { useEffect, useState } from 'react';

// Importa o componente Input do arquivo '../Forms/Input'.
import Input from '../Forms/Input';

// Importa o componente Button do arquivo '../Forms/Button'.
import Button from '../Forms/Button';

// Importa o hook useForm do arquivo '../../Hooks/useForm'.
import useForm from '../../Hooks/useForm';

// Importa o hook useFetch do arquivo '../../Hooks/useFetch'.
import useFetch from '../../Hooks/useFetch';

// Importa a função PASSWORD_RESET do arquivo '../../Api'.
import { PASSWORD_RESET } from '../../Api';

// Importa o componente Error do arquivo '../Helper/Error'.
import Error from '../Helper/Error';

// Importa o hook useNavigate do react-router-dom para navegar para outra rota.
import { useNavigate } from 'react-router-dom';

// Importa o componente Head do arquivo '../Helper/Head'.
import Head from '../Helper/Head';

// Declaração do componente LoginPasswordReset.
const LoginPasswordReset = () => {
  // Utiliza o estado 'login' para armazenar o valor do login.
  const [login, setLogin] = useState('');

  // Utiliza o estado 'key' para armazenar o valor da chave de reset de senha.
  const [key, setKey] = useState('');

  // Utiliza o hook useForm para gerenciar o estado do campo de senha.
  const password = useForm();

  // Utiliza o hook useFetch para fazer a requisição de reset de senha.
  const { error, loading, request } = useFetch();

  // Obtém a função navigate do hook useNavigate para navegar para outra rota.
  const navigate = useNavigate();

  // Utiliza o useEffect para obter os parâmetros 'key' e 'login' da URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  // Função assíncrona handleSubmit para lidar com o envio do formulário.
  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  // Renderiza o JSX do componente LoginPasswordReset.
  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

// Exporta o componente LoginPasswordReset como o default export do módulo.
export default LoginPasswordReset;
