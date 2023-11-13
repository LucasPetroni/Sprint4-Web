import styles from "../../style/Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.containerFooter}>
      <div>
        <img
          src="https://live.staticflickr.com/65535/53328716130_620fb3bdcb_n.jpg"
          alt="logo agile modal"
          className={styles.imgFooter}
        />
      </div>

      <p className={styles.footerText}>Todos os direitos reservados &copy;</p>

      <div className={styles.linksFooter}>
        <a href="https://www.instagram.com/portoseguro/" target="_blank">
          <img
            src="https://live.staticflickr.com/65535/53328234381_7660a21684_m.jpg"
            alt="logo linkedin"
            className={styles.logoLinkedin}
          />
        </a>

        <a
          href="https://www.linkedin.com/company/porto/?originalSubdomain=br"
          target="_blank"
        >
          <img
            src="https://live.staticflickr.com/65535/53328234391_e13a0f8b63_s.jpg"
            alt="logo instagram"
            className={styles.logoInstagram}
          />
        </a>

        <a href="https://www.portoseguro.com.br/" target="_blank">
          <img
            src="https://live.staticflickr.com/65535/53327362557_c09e4bb0b4_b.jpg"
            alt="logo porto seguro"
            className={styles.logoPorto}
          />
        </a>
      </div>
    </footer>
  );
}
