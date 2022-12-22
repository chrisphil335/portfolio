import Button from "react-bootstrap/Button";
import art from "../art.jpg";

const About = () => (
    <div>
        <h1>About Me</h1>
        <hr></hr>
        <p>Hi, I'm Christopher. I study math and I love to program! I have fun playing guitar and painting.</p>
        <img src={art} height="500" alt="art"></img><br></br><br></br>
        <Button href="https://docs.google.com/document/d/13jcSJ5D3AATSEB10FqqwwAoiH7kaZQJrBB4ng9N297U/edit?usp=sharing" target="_blank">Resume</Button>
    </div>
);

export default About;
