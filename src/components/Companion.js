import Card from "react-bootstrap/Card";
import companion_image from "../companion_image.png";

const Companion = () => (
    <div>
        <Card className="h-100" style={{width: "20rem"}}>
            <Card.Img src={companion_image} />
            <Card.Body>
                <Card.Title>Companion</Card.Title>
                <Card.Subtitle>Mental health app</Card.Subtitle>
                <Card.Text style={{textAlign: "left"}}>
                    Track your mood and interact with a chatbot/therapybot.
                    Built as a team of 4 at Hack the Valley V.
                    This project won best beginner hack.
                    <ul>
                        <li>HTML/CSS/JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </Card.Text>
                <Card.Link href="https://companion-htv5.github.io/client/#/" target="_blank">
                    Deployment
                </Card.Link>
                <Card.Link href="https://github.com/Companion-HTV5" target="_blank">
                    Source
                </Card.Link>
            </Card.Body>
        </Card>
    </div>
);

export default Companion;
