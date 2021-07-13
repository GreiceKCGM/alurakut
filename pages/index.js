import React from 'react';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu } from '../src/lib/CommonsAluraKut/Menu/index';
import OrkutNostalgicIconSet from '../src/lib/CommonsAluraKut/OrkutNostalgicIconSet/index';
import AlurakutProfileSidebarMenuDefault from '../src/lib/CommonsAluraKut/Menu/MenuProfile/AlurakutProfileSidebarMenuDefault';
import { ProfileRelationsBoxWrapper } from '../src/components/screen/ProfileRelations/style';

function ProfileSidebar(propriedades) {
  const { githubUser } = propriedades;
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${githubUser}.png`}
        alt={`${githubUser}'s profile`}
        style={{ borderRadius: '8px' }}
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @
          { githubUser }

        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const usuarioAleatorio = 'GreiceKCGM';
  const [pessoasFavoritas, setPessoasFavoritas] = React.useState([]);

  React.useEffect(() => {
    // setTimeout(() =>setPessoasFavoritas( [
    //   'juunegreiros',
    //   'omariosouto',
    //   'peas',
    //   'rafaballerini',
    //   'marcobrunodev',
    //   'felipefialho'
    // ]))
    fetch(`https://api.github.com/users/${usuarioAleatorio}/following`)
      .then((response) => {
        response.json().then((body) => setPessoasFavoritas(body.map(({ login }) => login)));
      });
  });

  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',

  }]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];

  // console.log('Nosso teste');
  // const comunidades = ['Alurakut'];

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />

        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleSubmit(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              };
              const comunidadeAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadeAtualizadas);
            }}
            >
              <div>

                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>

                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button type="submit">
                Criar comunidade
              </button>
            </form>
          </Box>

        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades (
              {comunidades.length}
              )
            </h2>
            <ul>
              {comunidades.map((itemAtual) => (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`}>
                    <img
                      src={itemAtual.image}
                      alt={`${itemAtual}'s Comunidade`}
                    />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Favoritas (
              {pessoasFavoritas.length}
              )
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`}>
                    <img
                      src={`https://github.com/${itemAtual}.png`}
                      alt={`${itemAtual}'s profile`}
                    />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              ))}
            </ul>

          </ProfileRelationsBoxWrapper>

        </div>

      </MainGrid>
    </>
  );
}
