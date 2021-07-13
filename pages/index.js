import styled from 'styled-components';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu } from'../src/lib/CommonsAluraKut/Menu/index';
import OrkutNostalgicIconSet from '../src/lib/CommonsAluraKut/OrkutNostalgicIconSet/index';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}



export default function Home() {
  const usuarioAleatorio = 'GreiceKCGM';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return(
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioAleatorio} />

        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

        </div>
        
        
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da Comunidade
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>

        
        </div>

      </MainGrid>
     </>
     )
}
