import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.heading}>Get in touch</h1>
      <h1 className={styles.heading2}>Ashutosh Mahapatra</h1>
      <div className={styles.allLinksDiv}>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            
          >
            <div className={styles.platformLinks}>Linkedin</div>
          </a>
        </div>
        <div>
          <a
            rel="noreferrer"
            target="_blank"
           
          >
            <div className={styles.platformLinks}>GitHub</div>
          </a>
        </div>
        <div>
          <a
            rel="noreferrer"
            target="_blank"
           
          >
            <div className={styles.platformLinks}>E-mail</div>
          </a>
        </div>
        <div>
          <a rel="noreferrer" target="_blank" href="tel:+917024986867">
            <div className={styles.platformLinks}>Phone</div>
          </a>
        </div>
      </div>
    </div>
  );
};
