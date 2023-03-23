import React , {useState} from "react";
import "../Footer/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
export default function Footer() {
  const [darkSide,setDarkSide] = useState(false)
  return (
    <div className="footer-container" onClick={() => setDarkSide(!darkSide)} style={{
      color: darkSide && '#010c10' ,
      background: darkSide && 'rgb(206, 246, 248)'
    }}>
      <div className="first-slide">
        <h2>Trainung Edge Consulting</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisici ng elit. Placeat
          odit animi, debitis aut impedit vpsum dolor sit amet consectetur,
          adipisici ng elit. Plpsum dolor sit amet consectetur, adipisici ng
          elit. Plpsum dolor sit amet consectetur, adipisici ng elit.
        </p>
        <main className="icons">
          <span>
            {" "}
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            {" "}
            <LinkedInIcon />
          </span>
          <span>
            {" "}
            <InstagramIcon />
          </span>
        </main>
      </div>
      <main className="second-side">
      <div>
        <h2>Pages</h2>
        <div className="spans">
          <span>Home it work</span>
          <span>Services</span>
          <span>About-us</span>
        </div>
      </div>
      <div>
        <h2>Service</h2>
        <div className="spans">
          <span>Sevice 1</span>
          <span>Sevice 2</span>
          <span>Sevice 3</span>
          <span>Sevice 4</span>
        </div>
      </div>
      <div>
        <h2>Contact</h2>
        <div className="spans">
          <span>
            {" "}
            <LocalPhoneIcon /> (406) 555-01-0120
          </span>
          <span>
            {" "}
            <EmailIcon /> trainingedgeconsulting@gmail.com
          </span>
          <span>
            {" "}
            <RoomIcon /> App 9 etage 4 Lot Jannah a Cote d'hotel Sunset Bd Med 6
            Beni Mellal
          </span>
        </div>
        </div>
      </main>
    </div>
  );
}
