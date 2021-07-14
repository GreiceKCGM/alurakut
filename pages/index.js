import React from 'react';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu } from '../src/lib/CommonsAluraKut/Menu/index';
import OrkutNostalgicIconSet from '../src/lib/CommonsAluraKut/OrkutNostalgicIconSet/index';
import ProfileSidebar from '../src/lib/CommonsAluraKut/Menu/MenuProfile/ProfileSidebar';
import PessoasComunidade from '../src/components/screen/pessoasComunidade';
import FormComunidades from '../src/components/screen/FormComunidades';
import ComunidadeBox from '../src/components/screen/comunidade';
import comunidadesPadrao from '../src/components/comunidadePadrao';

export default function Home() {
  const usuarioAleatorio = 'GreiceKCGM';
  const [comunidades, setComunidades] = React.useState([]);

  const addComunidade = (comunidade) => setComunidades([...comunidades, comunidade]);

  React.useEffect(() => setTimeout(() => setComunidades(comunidadesPadrao()), 1000), []);

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
          <FormComunidades addFunction={addComunidade} />

        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ComunidadeBox comunidades={comunidades} />
          <PessoasComunidade githubUser={usuarioAleatorio} />

        </div>

      </MainGrid>
    </>
  );
}
