import styles from "./Home.module.css";
import profile from "../images/profile.png"

export const Home = () => {
  
  return (
    <div id="home" className={styles.container}>
      <div style={{ flex: "1" }} className={styles.firstChild}>
        <div>Hi, I am</div>

        <div>
          <span style={{ color: "blueviolet" }}>Ashutosh</span>
        </div>
        <div>FullStack Developer</div>
        <div>
          <button className={styles.resumeBtn}>Resume</button>
        </div>
        <div className={styles.iconDiv}>
          <a target="_blank" rel="noreferrer" style={{ display: "block" }}>
            <img src={`https://cdn-icons-png.flaticon.com/512/25/25231.png`} alt="" />
          </a>
          <a style={{ display: "block" }} target="_blank" rel="noreferrer">
            <img src={`https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG20.png`} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.secondChild}>
        <img
          src={profile}
          alt="profile_img"
         
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};
