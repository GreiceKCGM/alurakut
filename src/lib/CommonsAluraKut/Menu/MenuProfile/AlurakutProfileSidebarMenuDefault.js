import React from 'react';
import { BASE_URL } from '../../BaseURL';
import { AlurakutProfileSidebarMenuDefaultWrapper } from '../styles/styled';

// ==========================================================
// AlurakutProfileSidebarMenuDefault
// ======================================================
export default function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefaultWrapper>
      <nav>
        <a href="/">
          <img
            src={`${BASE_URL}/icons/user.svg`}
            alt={`${BASE_URL}'s  profile`}
          />
          Perfil
        </a>
        <a href="/">
          <img
            src={`${BASE_URL}/icons/book.svg`}
            alt={`${BASE_URL}'s  recados`}
          />
          Recados
        </a>
        <a href="/">
          <img
            src={`${BASE_URL}/icons/camera.svg`}
            alt={`${BASE_URL}'s fotos`}
          />
          Fotos
        </a>
        <a href="/">
          <img
            src={`${BASE_URL}/icons/sun.svg`}
            alt={`${BASE_URL}'s depoimentos`}
          />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img
            src={`${BASE_URL}/icons/plus.svg`}
            alt={`${BASE_URL}'s amigos GitHub`}
          />
          GitHub Trends
        </a>
        <a href="/logout">
          <img
            src={`${BASE_URL}//icons/logout.svg`}
            alt={`${BASE_URL}'s sair`}
          />
          Sair
        </a>
      </nav>
    </AlurakutProfileSidebarMenuDefaultWrapper>
  );
}
