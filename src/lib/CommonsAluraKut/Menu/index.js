import React from 'react';
import NextLink from 'next/link';
import AlurakutMenuWrapper, { AlurakutMenuLogo } from './styles/styled';
import AlurakutMenuProfileSidebar from './MenuProfile/AlurakutMenuProfileSidebar';
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
    <AlurakutMenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <AlurakutMenuLogo src={`${BASE_URL}/logo.svg`} />

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
    </AlurakutMenuWrapper>
  )
}




