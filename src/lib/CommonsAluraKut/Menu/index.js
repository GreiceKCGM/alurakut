import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import AlurakutMenuWrapper, { AlurakutMenuLogo } from './styles/styled';
import AlurakutMenuProfileSidebar from './MenuProfile/AlurakutMenuProfileSidebar';
import { BASE_URL } from '../BaseURL';

const v = '1';

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
}

// ======================================================
// Menu
// =================================================
export function AlurakutMenu({ githubUser }) {
  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <AlurakutMenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <AlurakutMenuLogo src={`${BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/' }, { name: 'Amigos', slug: '/amigos' }, { name: 'Comunidades', slug: '/comunidades' }].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href="/logout">
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button type="button" onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} alt={`${BASE_URL}'s menu aberto`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} alt={`${BASE_URL}'s menu fechado`} />}
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={githubUser} />
    </AlurakutMenuWrapper>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  children: null,
  href: '',
};

AlurakutMenu.propTypes = {
  githubUser: PropTypes.string,

};

AlurakutMenu.defaultProps = {
  githubUser: '',

};
