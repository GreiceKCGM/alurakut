import React from 'react';
import PropTypes from 'prop-types';
import AlurakutProfileSidebarMenuDefault from './AlurakutProfileSidebarMenuDefault';

export default function AlurakutMenuProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img
          src={`https://github.com/${githubUser}.png`}
          style={{ borderRadius: '8px' }}
          alt={`${githubUser}'s profile`}
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @
            {githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  );
}

AlurakutMenuProfileSidebar.propTypes = {
  githubUser: PropTypes.string,

};

AlurakutMenuProfileSidebar.defaultProps = {
  githubUser: '',

};
