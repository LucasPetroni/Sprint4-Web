export default async function Chamados(chamados) {
  const response = await fetch("http://localhost:3000/chamado");
  const listaChamados = await response.json();

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
            {listaChamados.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.placa}</td>
                <td>{item.desc}</td>
                <td>{item.endereco}</td>
              </tr>
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
