// Importa a biblioteca React
import React from 'react';

// Importa os estilos específicos do componente de um arquivo separado './UserPhotoPost.module.css'
import styles from './UserPhotoPost.module.css';

// Importa o hook useForm do arquivo '../../Hooks/useForm'
import useForm from '../../Hooks/useForm';

// Importa o hook useFetch do arquivo '../../Hooks/useFetch'
import useFetch from '../../Hooks/useFetch';

// Importa o componente Input do arquivo '../Forms/Input'
import Input from '../Forms/Input';

// Importa o componente Button do arquivo '../Forms/Button'
import Button from '../Forms/Button';

// Importa o componente Error do arquivo '../Helper/Error'
import Error from '../Helper/Error';

// Importa a função PHOTO_POST do arquivo '../../Api'
import { PHOTO_POST } from '../../Api';

// Importa o hook useNavigate do módulo 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// Importa o componente Head do arquivo '../Helper/Head'
import Head from '../Helper/Head';

// Declaração do componente UserPhotoPost
const UserPhotoPost = () => {
  // Utiliza o hook useForm para criar o estado e as funções para manipulação dos campos de formulário 'nome', 'peso' e 'idade'
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');

  // Utiliza o hook useState para criar o estado 'img' que armazenará a imagem selecionada pelo usuário
  const [img, setImg] = React.useState({});

  // Utiliza o hook useFetch para realizar requisições HTTP
  const { data, error, loading, request } = useFetch();

  // Utiliza o hook useNavigate para obter a função de navegação
  const navigate = useNavigate();

  // Utiliza o hook useEffect para executar uma ação quando o valor de 'data' é atualizado
  React.useEffect(() => {
    // Se 'data' possuir um valor, navega para a rota '/conta'
    if (data) navigate('/conta');
  }, [data, navigate]);

  // Função que lida com o envio do formulário
  function handleSubmit(event) {
    event.preventDefault();

    // Cria um objeto FormData e adiciona os valores dos campos do formulário
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    // Obtém o token de autenticação do localStorage
    const token = window.localStorage.getItem('token');

    // Chama a função PHOTO_POST passando o formData e o token para obter a URL e as opções de requisição
    const { url, options } = PHOTO_POST(formData, token);

    // Realiza a requisição HTTP
    request(url, options);
  }

  // Função que lida com a mudança do input de imagem
  function handleImgChange({ target }) {
    // Atualiza o estado 'img' com a URL de pré-visualização e o arquivo raw da imagem selecionada
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  // Retorna o JSX do componente UserPhotoPost
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

// Exporta o componente UserPhotoPost como o default export do módulo
export default UserPhotoPost;
