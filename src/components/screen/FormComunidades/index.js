import React from 'react';
import Box from '../../Box';

export default function FormComunidades() {
  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',

  }]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];

  // console.log('Nosso teste');
  // const comunidades = ['Alurakut'];
  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
      <form onSubmit={function handleChange(e) {
        e.preventDefault();
        const dadosDoForm = new FormData(e.target);

        const comunidade = {
          id: new Date().toISOString(),
          title: dadosDoForm.get('title'),
          image: dadosDoForm.get('image'),
        };
        const comunidadeAtualizadas = [...comunidades, comunidade];
        setComunidades(comunidadeAtualizadas);
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
