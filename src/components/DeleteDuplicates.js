import Card from "react-bootstrap/Card";
import deduplicate_image from "../deduplicate_image.png";

const DeleteDuplicates = () => (
    <div>
        <Card className="h-100" style={{width: "20rem"}}>
            <Card.Img src={deduplicate_image} />
            <Card.Body>
                <Card.Title>Delete Duplicates</Card.Title>
                <Card.Subtitle>Spotify web app</Card.Subtitle>
                <Card.Text>
                    Remove duplicate tracks from playlists.
                    <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Spotify Web API</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default DeleteDuplicates;
