import React from 'react';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu } from '../src/lib/CommonsAluraKut/Menu/index';
import OrkutNostalgicIconSet from '../src/lib/CommonsAluraKut/OrkutNostalgicIconSet/index';
import { ProfileRelationsBoxWrapper } from '../src/components/screen/ProfileRelations/style';
import ProfileSidebar from '../src/lib/CommonsAluraKut/Menu/MenuProfile/ProfileSidebar';
import PessoasComunidade from '../src/components/screen/pessoasComunidade';
import FormComunidades from '../src/components/screen/FormComunidades';

export default function Home() {
  const usuarioAleatorio = 'GreiceKCGM';
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
          <FormComunidades />

        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades
            </h2>
            {/* <h2 className="smallTitle">
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
            </ul> */}
          </ProfileRelationsBoxWrapper>
          <PessoasComunidade githubUser={usuarioAleatorio} />

        </div>

      </MainGrid>
    </>
  );
}
