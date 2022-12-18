import Card from "react-bootstrap/Card";
import edge_detection_image from "../edge_detection_image.png";

const EdgeDetection = () => (
    <div>
        <Card className="h-100" style={{width: "20rem"}}>
            <Card.Img src={edge_detection_image} />
            <Card.Body>
                <Card.Title>Edge Detection</Card.Title>
                <Card.Subtitle>Edge detection program</Card.Subtitle>
                <Card.Text>
                    Uses convolution and the Sobel algorithm to detect edges and draw them.
                    <ul>
                        <li>C</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default EdgeDetection;
