import styles from "../../style/Integrantes.module.css";

export default function Cabecalho() {
  return (
    <div className={styles.integrantesContainer}>
      <div className={styles.repoLinks}>
        <a
          href="https://github.com/LucasPetroni/Sprint4-Web"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.repLink}
        >
          Link para o Repositório
        </a>
      </div>
      <div>
        <div key={1} className={styles.integranteCard}>
          <img
            src="https://live.staticflickr.com/65535/53327362552_d1db6fec5e_z.jpg"
            alt="Matheus Paulo Lima Delgado"
            className={styles.fotoIntegrante}
          />
          <div className={styles.infoIntegrante}>
            <span className={styles.nomeIntegrante}>
              Matheus Paulo Lima Delgado
            </span>
            <span className={styles.rmIntegrante}>RM: 552189</span>
          </div>
        </div>

        <div key={2} className={styles.integranteCard}>
          <img
            src="https://live.staticflickr.com/65535/53328576444_d9eb4411ac_z.jpg"
            alt="Lucas Petroni"
            className={styles.fotoIntegrante}
          />
          <div className={styles.infoIntegrante}>
            <span className={styles.nomeIntegrante}>Lucas Petroni</span>
            <span className={styles.rmIntegrante}>RM: 97861</span>
          </div>
        </div>

        <div key={3} className={styles.integranteCard}>
          <img
            src="https://live.staticflickr.com/65535/53327362672_372a491088_z.jpg"
            alt="Caio Boris"
            className={styles.fotoIntegrante}
          />
          <div className={styles.infoIntegrante}>
            <span className={styles.nomeIntegrante}>Caio Boris</span>
            <span className={styles.rmIntegrante}>RM: 552496</span>
          </div>
        </div>

        <div key={4} className={styles.integranteCard}>
          <img
            src="https://live.staticflickr.com/65535/53328234356_ddc904836b_z.jpg"
            alt="Nathaly Oliveira"
            className={styles.fotoIntegrante}
          />
          <div className={styles.infoIntegrante}>
            <span className={styles.nomeIntegrante}>Nathaly Oliveira</span>
            <span className={styles.rmIntegrante}>RM: 552538</span>
          </div>
        </div>
      </div>
    </div>
  );
}
