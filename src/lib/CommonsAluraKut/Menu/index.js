import React from 'react';
import {AlurakutMenuProfileSidebar } from '../AluraKut';

// ================================================================================================================
// Menu
// ================================================================================================================
export function AlurakutMenu({ githubUser }) {
    const [isMenuOpen, setMenuState] = React.useState(false);
    return (
      <AlurakutMenu.Wrapper isMenuOpen={isMenuOpen}>
        <div className="container">
          <AlurakutMenu.Logo src={`${BASE_URL}/logo.svg`} />
  
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
      </AlurakutMenu.Wrapper>
    )
  }