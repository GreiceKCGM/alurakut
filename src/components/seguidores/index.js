import React from 'react';
import PropTypes from 'prop-types';
import { ProfileRelationsBoxWrapper } from '../screen/ProfileRelations/style';

export default function SeguidoresBox({ githubUser }) {
  const [seguidores, setSeguidores] = React.useState([]);
  // 0 - Pegar o array de dados do github
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/followers`)
      .then((response) => {
        response.json().then((body) => setSeguidores(body.map(({ login }) => login)));
      });
  }, []);
  //       .then((respostaDoServidor) => respostaDoServidor.json())
  //       .then((respostaCompleta) => {
  //         setSeguidores(respostaCompleta);
  //       });
  //   }, []);
  return (

    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Seguidores
        (
        {seguidores.length}
        )
      </h2>

      <ul>
        {seguidores.slice(0, 6).map((itemAtual) => (
          <li key={itemAtual}>
            <a href={`https://github.com/${itemAtual}`}>
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
  );
}

SeguidoresBox.propTypes = {
  githubUser: PropTypes.string,

};

SeguidoresBox.defaultProps = {
  githubUser: '',
};
