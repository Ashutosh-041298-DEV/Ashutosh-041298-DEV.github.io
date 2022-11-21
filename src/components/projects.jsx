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
           
            <li>Cart and checkout</li>
            <li>Filter and sorting of Data in jobs Section</li>
          </ul>
          <div  >
            <b> 
            Tech stack- HTML | CSS | ES6 | Github
            </b>
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
          <div  ><b>Tech stack- HTML | CSS | ES6 | Git</b></div>
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
           <li>Login and Signup functionality.</li>
           <li>Pagination and Sorting.</li>
           <li>Users page with json-server.</li>
           <li>Backend Heroku server.</li>
          </ul>
          <div  ><b>Tech stack- React | Json-server | heroku | styled-components | chakra-ui</b></div>
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
           <li>Navbar and Footer </li>
           <li>Calender using Chakra ui</li>
           <li>Navbar change on the basis of user authentication</li>
          </ul>
          <div  ><b>Tech stack- React JS | Firebase | Chakra-ui</b></div>
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
          <div  ><b>Tech stack- React Js| Json-Server |chakra-ui</b></div>
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
          <div  ><b>Teck Stack:-ES6 | HTML | CSS | Vanilla Js</b></div>
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
