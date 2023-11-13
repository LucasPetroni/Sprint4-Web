// import { NextResponse } from "next/server";

// const ListaChamados = [
//   {
//     id: 126621,
//     nome: "Caio Boris",
//     desc: "Motor com falha",
//     img: "../public/caminhao-quebrado.jpg",
//     endereco: "Rua da Consolação, 1234 - São Paulo - SP",
//     situacao: "Em Andamento",
//   },
//   {
//     id: 176688,
//     nome: "Matheus Chuchu",
//     desc: "Caminhao de 2 carretas tombada",
//     img: "../public/caminhao-tombado.jpg",
//     endereco: "Rua da Alfândega, 567 - Salvador - BA",
//     situacao: "Concluído",
//   },
//   {
//     id: 134890,
//     nome: "Nathasha Oliveira",
//     desc: "Caminhao atolado",
//     img: "../public/caminhao-atolado.jpg",
//     endereco: "Rua XV de Novembro, 789 - Curitiba - PR",
//     situacao: "Cancelado",
//   },
//   {
//     id: 298076,
//     nome: "Lucas Petroni",
//     desc: "5 peneus furados",
//     img: "../public/caminha-2peneus-furados.jpg",
//     endereco: "Rua dos Goianos, 123 - Anápolis - GO",
//     situacao: "Em Andamento",
//   },
// ];

// export async function GET(request, { params }) {
//   console.log("Parâmetros recebidos:", params);

//   const id = params.id;
//   if (params.id > 0) {
//     const chamado = ListaChamados.find((chamado) => chamado.id == id);
//     console.log("Chamado encontrado:", chamado);
//     return NextResponse.json(chamado);
//   } else {
//     console.error("Erro: ID inválido");
//     return params.id == 0
//       ? NextResponse.json(ListaChamados)
//       : NextResponse.redirect("http://localhost:3000/error");
//   }
// }
