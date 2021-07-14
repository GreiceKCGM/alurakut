import React from 'react';
import PropTypes from 'prop-types';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations/style';

export default function PessoasComunidade({ githubUser }) {
  const [pessoasFavoritas, setPessoasFavoritas] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/following`)
      .then((response) => {
        response.json().then((body) => setPessoasFavoritas(body.map(({ login }) => login)));
      });
  }, []);
  return (

    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        Pessoas da Favoritas (
        {pessoasFavoritas.length}
        )
      </h2>

      <ul>
        {pessoasFavoritas.slice(0, 6).map((itemAtual) => (
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

PessoasComunidade.propTypes = {
  githubUser: PropTypes.string,

};

PessoasComunidade.defaultProps = {
  githubUser: '',
};
