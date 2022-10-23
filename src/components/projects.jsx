import styles from "./projects.module.css";
import bobby from "../images/bobbybrown.png"
import desk from "../images/desktime.png"
import drum from "../images/Drumkit.png"
import envoy from "../images/envoy.png"
import intern from "../images/interntheory.png"
export const Projects = () => {
    
  return (
    <div id="projects" className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>

      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src={intern}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Intern-Theory website</h2>
          <ul>
            <li>Home, Login and Sign up for company and students</li>
           
            <li>cart and checkout</li>
            <li>filter and sorting of Data in jobs Section</li>
          </ul>
          <div>
            Tech stack- HTML | CSS | ES6 | Github
          </div>
          <br />
          <button
            onClick={() => {
              window.open("https://elegant-newton-1f5d84.netlify.app/", "_blank");
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>

      

      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src={bobby}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Bobbi-Brown Website</h2>
          <ul>
            <li>Created the database and connected it with the files.</li>
            <li>Developed the Product and Product details page.</li>
            <li>Add numerous filtering and sorting functionalities.</li>
            <li>Created Cart and Checkout page with payment page </li>
          </ul>
          <div>Tech stack- HTML | CSS | ES6 | Git</div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://luxury-kataifi-e1912d.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>

      <div className={styles.childs}>
        <div>
          <center>
            <img
              style={{ borderRadius: "5px" }}
              src="https://user-images.githubusercontent.com/97525279/167412371-cd534233-dfd0-400c-89fb-79a8e2b6daa9.png"
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>NDTV</h2>
          <ul>
            <li>Variety of news pages like Latest, Covid, India etc</li>
            <li>Shows Static + Video headlines</li>
            <li>Provided proper sections for advertisements</li>
          </ul>
          <div>Tech stack- React | Node.js | HTML | CSS | Git</div>
          <br />
          <button
            onClick={() => {
              window.open("https://csb-tdbg0f.netlify.app/", "_blank");
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/huzaifa621/ndtv", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
