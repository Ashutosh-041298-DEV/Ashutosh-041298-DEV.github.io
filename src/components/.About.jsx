import styles from "./About.module.css";


export const About = () => {
    const copy="https://huzaifa-sheikh.netlify.app/static/media/copy.aab2df846ca072fb67ff.png"
  return (
    <div id="about" className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <h2 className={styles.heading2}>I'm Ashutosh Mahapatra</h2>
      <div className={styles.para}>
      Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, JavaScript, React, and Redux. Passionate about implementing and launching new projects. looking to get hired and build experience and get new skills along the way then use those skills to earn myself a good position
      </div>
      <div className={styles.mail}>
        Drop a mail @ Ashutoshm439@gmail.com
       
      </div>
    </div>
  );
};
