import Link from "next/link";
import styles from "../../style/Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <div>
      <header className={styles.header}>
        <img
          src="https://live.staticflickr.com/65535/53328234371_7d5724e1d6_m.jpg"
          alt="Logo agile modal"
          className={styles.imgHeader}
        />
        <div className={styles.navHeader}>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/chamados">CHAMADOS</Link>
            </li>
            <li>
              <Link href="/integrantes">INTEGRANTES</Link>
            </li>
            <li>
              <img
                src="https://live.staticflickr.com/65535/53328694195_1b5a6271a1_m.jpg"
                alt="imagem de usuario"
                className={styles.imgHeader}
                style={{ width: "100%", height: "30px" }}
              />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
