import styles from "./Home.module.css";

export const Home = () => {
  const profile =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const github =
    "https://github.githubassets.com/images/modules/logos_page/Octocat.png";
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
          width={"200px !important"}
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};
