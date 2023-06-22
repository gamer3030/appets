import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({ user }) => {
  // Importa o React, os componentes FeedModal e FeedPhotos, e o PropTypes

  const [modalPhoto, setModalPhoto] = React.useState(null);
  // Cria um estado para controlar a foto exibida no modal. Inicialmente, é nulo.

  const [pages, setPages] = React.useState([1]);
  // Cria um estado para controlar as páginas do feed. Inicialmente, contém apenas a página 1.

  const [infinite, setInfinite] = React.useState(true);
  // Cria um estado para controlar a rolagem infinita do feed. Inicialmente, é verdadeiro.

  React.useEffect(() => {
    // Define um efeito colateral que será executado sempre que houver mudanças em 'infinite'

    let wait = false;
    // Variável para controlar o tempo de espera entre as requisições

    function infiniteScroll() {
      // Função para controlar o comportamento da rolagem infinita

      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        // Obtém a posição de rolagem atual e a altura total da página

        if (scroll > height * 0.75 && !wait) {
          // Verifica se a posição de rolagem está a 75% da altura total da página
          // e se não há espera entre as requisições

          setPages((pages) => [...pages, pages.length + 1]);
          // Adiciona uma nova página ao estado 'pages'

          wait = true;
          // Define a variável 'wait' como verdadeiro para iniciar a espera

          setTimeout(() => {
            wait = false;
          }, 500);
          // Define um tempo de espera de 500ms antes de permitir uma nova requisição
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    // Adiciona os eventos de rolagem (mousewheel e scroll) ao window para ativar a rolagem infinita

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
    // Remove os eventos de rolagem quando o componente é desmontado
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {/* Se houver uma foto no modal, renderiza o componente FeedModal passando a foto e a função para definir a foto no modal */}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
      {/* Renderiza o componente FeedPhotos para cada página no estado 'pages',
        passando as propriedades necessárias */}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens.
        </p>
      )}
      {/* Se a rolagem infinita estiver desativada e não houver usuário logado, exibe uma mensagem indicando que não há mais postagens */}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};
// Define um valor padrão para a propriedade 'user'

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
// Define os tipos esperados para a propriedade 'user'

export default Feed;
// Exporta o componente Feed como padrão para ser usado em outros arquivos
