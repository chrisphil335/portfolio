import { 
    FaGithub,
    FaLinkedinIn,
    FaSpotify,
} from "react-icons/fa";

const Footer = () => (
    <footer>
        <hr></hr>
        <a href="https://github.com/chrisphil335" target="_blank"><FaGithub size="2em"/></a>
        <a href="https://www.linkedin.com/in/christopher-phillips-9b17071a/" target="_blank"><FaLinkedinIn size="2em" /></a>
        <a type="email" href="https://open.spotify.com/user/cxxwz73sd9ry2t8lcsv6xrzw1?si=9e365ed3d2fd4628" target="_blank"><FaSpotify size="2em" /></a>
    </footer>
);

export default Footer;
