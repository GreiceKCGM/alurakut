import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import MenuAluraKut  from'./styles/styled';
import { BASE_URL } from '../BaseURL';



const v = '1';


function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

// ================================================================================================================
// Menu
// ================================================================================================================
export function AlurakutMenu({ githubUser }) {
  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <MenuAluraKut.Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <MenuAluraKut.Logo src={`${BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/'}, {name: 'Amigos', slug: '/amigos'}, {name: 'Comunidades', slug: '/comunidades'}].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />}
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={githubUser} />
    </MenuAluraKut.Wrapper>
  )
}

function AlurakutMenuProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  )
}

// ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================
export function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
            Perfil
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
            Recados
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
            Fotos
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
            Depoimentos
          </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
            GitHub Trends
          </a>
        <a href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} />
            Sair
          </a>
      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  )
}
AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;
