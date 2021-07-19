import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../Box';

export default function FormComunidades({ addFunction }) {
  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
      <form onSubmit={function handleChange(e) {
        e.preventDefault();

        if (!addFunction) { return false; }

        const dadosDoForm = new FormData(e.target);

        const comunidade = {
          title: dadosDoForm.get('title'),
          imageURL: dadosDoForm.get('image'),
          href: dadosDoForm.get('href'),
          creatorSlug: 'GreiceKCGM',
        };

        addFunction(comunidade);
        return true;
      }}
      >
        <div>

          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
          />
        </div>
        <div>

          <input
            placeholder="Coloque uma URL para usarmos de capa"
            name="image"
            aria-label="Coloque uma URL para usarmos de capa"
          />
        </div>
        <button type="submit">
          Criar comunidade
        </button>
      </form>
    </Box>
  );
}

FormComunidades.propTypes = {
  addFunction: PropTypes.func,

};

FormComunidades.defaultProps = {
  addFunction: undefined,
};
