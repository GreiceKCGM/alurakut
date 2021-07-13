import React from 'react';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations/style';

export default function PessoasComunidade({ githubUser }) {
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
    fetch(`https://api.github.com/users/${githubUser}/following`)
      .then((response) => {
        response.json().then((body) => setPessoasFavoritas(body.map(({ login }) => login)));
      });
  });
  return (

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
  );
}
