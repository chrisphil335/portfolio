import Card from "react-bootstrap/Card";
import froggy_image from "../froggy_image.png";

const Froggy = () => (
    <div>
        <Card className="h-100" style={{width: "20rem"}}>
            <Card.Img src={froggy_image} />
            <Card.Body>
                <Card.Title>Froggy</Card.Title>
                <Card.Subtitle>Videogame</Card.Subtitle>
                <Card.Text>
                    Frogger clone made using MIPS Assembly.
                    <ul>
                        <li>Assembly</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default Froggy;
