import Card from "react-bootstrap/Card";
import clonecraft_image from "../clonecraft_image.png";

const CloneCraft = () => (
    <div>
        <Card className="h-100" style={{width: "20rem"}}>
            <Card.Img src={clonecraft_image} />
            <Card.Body>
                <Card.Title>CloneCraft</Card.Title>
                <Card.Subtitle>Videogame</Card.Subtitle>
                <Card.Text>
                    Minecraft clone made using Ursina game engine in Python.
                    <ul>
                        <li>Python</li>
                        <li>Ursina</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default CloneCraft;
