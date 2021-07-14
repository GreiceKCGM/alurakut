import React from 'react';
import { ProfileRelationsBoxWrapper } from '../ProfileRelations/style';

export default function ComunidadeBox({comunidades}) {
  return (

    <ProfileRelationsBoxWrapper>

      <h2 className="smallTitle">
        Comunidades (
        {comunidades.length}
        )
      </h2>
      <ul>
        {comunidades.slice(0, 6).map((itemAtual) => (
          <li key={itemAtual.id}>
            <a href={`${itemAtual.href}`}>
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
  );
}