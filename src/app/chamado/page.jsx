

export default async function Chamado(chamados) {
  // const response = await fetch("http://localhost:3000/chamado");
  // const response = await fetch("http://localhost:8080/agilemodalapi/webapi/chamados");
  // const listaChamados = await response.json();
  
  const response = await fetch('http://localhost:3000/chamado/route');
   const listaChamados = await response.json();
  console.log(response);

  return (
    <div className="container-chamados">
      <h1>Lista de Chamados</h1>

      <div>
        <table className="Tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>ENDEREÇO</th>
              <th>SITUAÇÃO</th>
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(listaChamados, 'lista')} */}
            {listaChamados.map((item, indice) => (
              <tr key={indice}>
                <td>{item.idChamado}</td>
                <td>{item.codPlacaVeiculo}</td>
                {/* <td>{item.nome}</td>
                <td>{item.placa}</td>
                <td>{item.desc}</td>
                <td>{item.endereco}</td> */}
              </tr>
              // console.log(item)
            ))}
          </tbody>

          {/* 
          {chamados.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.id}</td>
              <td>{chamado.nome}</td>
              <td>{chamado.desc}</td>
              <td>
                <img src={chamado.img} alt={chamdo.desc} />
              </td>
              <td>{chamado.endereco}</td>
              <td>{chamado.situacao}</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
          ))} */}
          {/* 
          <tr>
            <td>126621</td>
            <td>Caio Boris</td>
            <td>Motor com falha</td>
            <td>
              <img
                src="https://live.staticflickr.com/65535/53327362632_0f7f22e9de_m.jpg"
                alt="Motor com falha"
              />
            </td>

            <td>Rua da Consolação, 1234 - São Paulo - SP</td>
            <td>Em Andamento</td>
            <td>editar</td>
          </tr> */}
        </table>
      </div>
    </div>
  );
}

export async function GET(resquest, { params }) {
  const response = await fetch(
    // "https://run.mocky.io/v3/38fdb4a3-bc14-4202-aae6-a93017eb46bf"
    "http://localhost:8080/agilemodalapi/webapi/chamados"
  );
  const result = await response.json();
  console.log(result, 'oii')
  return NextResponse.json(result);
}