import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../components/Box';
import AlurakutProfileSidebarMenuDefault from './AlurakutProfileSidebarMenuDefault';

export default function ProfileSidebar({ githubUser }) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${githubUser}.png`}
        alt={`${githubUser}'s profile`}
        style={{ borderRadius: '8px' }}
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @
          { githubUser }

        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

ProfileSidebar.propTypes = {
  githubUser: PropTypes.string,

};

ProfileSidebar.defaultProps = {
  githubUser: '',

};
