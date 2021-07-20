import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { AlurakutMenu } from '../src/lib/CommonsAluraKut/Menu/index';
import OrkutNostalgicIconSet from '../src/lib/CommonsAluraKut/OrkutNostalgicIconSet/index';
import ProfileSidebar from '../src/lib/CommonsAluraKut/Menu/MenuProfile/ProfileSidebar';
import PessoasComunidade from '../src/components/screen/pessoasComunidade';
import FormComunidades from '../src/components/screen/FormComunidades';
import ComunidadeBox from '../src/components/screen/comunidade';
import SeguidoresBox from '../src/components/seguidores';

export default function Home(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const usuarioAleatorio = props.githubUser;
  const [comunidades, setComunidades] = React.useState([]);

  const addComunidade = (comunidade) => setComunidades([...comunidades, comunidade]);

  React.useEffect(() => {
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        Authorization: 'b28b8cffee119056d468c885c776b2',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          allCommunities {
          id 
          title
          imageUrl
          creatorslug
        }
      }`,
      }),
    })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((respostaCompleta) => {
        const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
        setComunidades(comunidadesVindasDoDato);
      });
  }, []);

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
          <SeguidoresBox githubUser={usuarioAleatorio} />
          <ComunidadeBox comunidades={comunidades} />
          <PessoasComunidade githubUser={usuarioAleatorio} />

        </div>

      </MainGrid>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token,
    },
  })
    .then((resposta) => resposta.json());

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser,
    }, // will be passed to the page component as props
  };
}

Home.propTypes = {
  githubUser: PropTypes.string.isRequired,

};
