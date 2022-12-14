import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.heading}>Get in touch</h1>
      <h1 className={styles.heading2}>Ashutosh Mahapatra</h1>
      <h2 className={styles.heading2}>ashutoshm439@gmail.com</h2>
      <h2 className={styles.heading2}>+91-7024986867</h2>
      <div className={styles.allLinksDiv}>
        <div>
          <a
            href="https://www.linkedin.com/in/ashutosh-mahapatra-680943144/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.platformLinks}>Linkedin</div>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Ashutosh-041298-DEV"
            rel="noreferrer"
            target="_blank"
          >
            <div className={styles.platformLinks}>GitHub</div>
          </a>
        </div>
      </div>
    </div>
  );
};
