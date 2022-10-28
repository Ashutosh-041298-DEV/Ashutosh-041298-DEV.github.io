import styles from "./projects.module.css";
import bobby from "../images/bobbybrown.png"
import desk from "../images/desktime.png"
import drum from "../images/Drumkit.png"
import envoy from "../images/envoy.png"
import intern from "../images/interntheory.png"
import kind from "../images/kind.png"
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
              window.open("https://github.com/Ashutosh-041298-DEV/interntheory", "_blank");
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
              window.open("https://github.com/Ashutosh-041298-DEV/Bobbi-brown-clone-website", "_blank");
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
              src={kind}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Kindmeal.my website</h2>
          <ul>
           <li>Login and Signup functionality</li>
           <li>pagination and Sorting </li>
           <li>users page with json-server</li>
           <li>backend Heroku server</li>
          </ul>
          <div>Tech stack- React | Json-server | heroku | styled-components | chakra-ui</div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://scenic-friends-2114.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/scenic-friends-2114", "_blank");
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
              src={desk}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Desktime Website</h2>
          <ul>
           <li>Login and Signup functionality</li>
           <li>navbar and Footer </li>
           <li>Calender using Chakra ui</li>
           <li>Navbar change on the basis of user authentication</li>
          </ul>
          <div>Tech stack- React JS | Firebase | Chakra-ui</div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://cultured-bed-2030.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/cultured-bed-2030", "_blank");
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
              src={envoy}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Envoy.com Website</h2>
          <ul>
            <li>created using React JS </li>
            <li>Home page Navbar and Footer with authentication</li>
            <li>Products page with sorting and filter</li>
            <li>Login and signup</li>
            
          </ul>
          <div>Tech stack- React Js| Json-Server |chakra-ui</div>
          <br />
          <button
            onClick={() => {
              window.open(
                "https://mute-line-8050.netlify.app/",
                "_blank"
              );
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/mute-line-8050", "_blank");
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
              src={drum}
              alt=""
            />
          </center>
        </div>
        <div className={styles.afterImg}>
          <h2>Drumkit website</h2>
          <ul>
            <li>play sounds using both keyboard </li>
            <li>Touch buttons are available for playing sound</li>
            <li>Create your own music</li>
            
          </ul>
          <div>ES6 | Html | Css | Vanilla JS</div>
          <br />
          <button
            onClick={() => {
              window.open("https://naughty-sinoussi-58c007.netlify.app/", "_blank");
            }}
          >
            Website
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/Ashutosh-041298-DEV/Drumkit", "_blank");
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
