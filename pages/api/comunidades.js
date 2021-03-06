import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = '000a1482901f142bcc9d3d67a99261';
    const client = new SiteClient(TOKEN);
    console.log(request.body);

    // Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: '970699', // ID do Model de "Communities" criado pelo Dato
      ...request.body,
      // title: "Comunidade de Teste",
      // imageUrl: "https://github.com/omariosouto.png",
      // creatorSlug: "omariosouto"
    });

    console.log(registroCriado);

    response.json({
      dados: 'Algum dado qualquer',
      registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!',
  });
}
