import React from 'react';
import Box from '../../../../components/Box';
import AlurakutProfileSidebarMenuDefault from './AlurakutProfileSidebarMenuDefault';

export default function ProfileSidebar({ propriedades, githubUser }) {
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
