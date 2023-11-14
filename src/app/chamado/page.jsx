import styles from "../../style/Chamados.module.css";

export default async function Chamado(chamados) {
  const response = await fetch("http://localhost:3000/chamado/route");
  const listaChamados = await response.json();
  console.log(response);

  const siglaParaPalavraCompleta = {
    FIN: "Finalizado",
    INI: "Iniciado",
    PRO: "Processando",
  };

  return (
    <div className={styles.containerChamados}>
      <h1 className={styles.h1}>Lista de Chamados</h1>

      <div>
        <table className={styles.Tabela}>
          <thead>
            <tr>
              <th>ID</th>
              <th>PLACA</th>
              <th>DESCRICAO</th>
              <th>LOCAL</th>
              <th>COMPLEMENTO</th>
              <th>SITUAÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {listaChamados.map((item, indice) => (
              <tr key={indice}>
                <td>{item.idChamado}</td>
                <td>{item.codPlacaVeiculo}</td>
                <td>{item.desChamado}</td>
                <td>
                  {item.desLocal}, N° {item.numLogradouro}{" "}
                </td>
                <td>{item.desComplemento}</td>
                <td
                  className={`${
                    styles[siglaParaPalavraCompleta[item.stcChamado]]
                  } ${
                    styles[
                      siglaParaPalavraCompleta[item.stcChamado].toLowerCase()
                    ]
                  }`}
                >
                  {siglaParaPalavraCompleta[item.stcChamado]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function GET(request, { params }) {
  const response = await fetch(
    "http://localhost:8080/agilemodalapi/webapi/chamados"
  );
  const result = await response.json();
  console.log(result, "oii");
  return NextResponse.json(result);
}
