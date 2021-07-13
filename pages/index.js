import React from 'react';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu } from '../src/lib/CommonsAluraKut/Menu/index';
import OrkutNostalgicIconSet from '../src/lib/CommonsAluraKut/OrkutNostalgicIconSet/index';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  const { githubUser } = propriedades;
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        alt={`${githubUser}'s profile`}
        style={{ borderRadius: '8px' }}
      />
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

  return (
    <>
      <AlurakutMenu />
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

        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
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

          <Box>
            MInhas Comunidades
          </Box>

        </div>

      </MainGrid>
    </>
  );
}
