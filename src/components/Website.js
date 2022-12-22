import Card from "react-bootstrap/Card";
import portfolio_image from "../portfolio_image.png";

const Website = () => (
    <div>
        <Card className="h-100" style={{ width: "20rem" }}>
            <Card.Img src={portfolio_image} />
            <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Subtitle>My personal website</Card.Subtitle>
                <Card.Text>
                    Learn about me and reach out!
                    <ul>
                        <li>HTML/CSS/JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </Card.Text>
                <Card.Link href="https://chrisphil335.github.io/">Deployment</Card.Link>
                <Card.Link href="https://github.com/chrisphil335/chrisphil335.github.io">Source</Card.Link>
            </Card.Body>
        </Card>
    </div>
);

export default Website;
