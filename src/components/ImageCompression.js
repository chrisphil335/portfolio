import Card from "react-bootstrap/Card";
import image_compression_image from "../image_compression_image.png";

const ImageCompression = () => (
    <div>
        <Card className="h-100" style={{width: "20rem"}}>
            <Card.Img src={image_compression_image} />
            <Card.Body>
                <Card.Title>Image Compression</Card.Title>
                <Card.Subtitle>Image compression program</Card.Subtitle>
                <Card.Text>
                    An image is made of thousands of pixels each storing an individual color. 
                    Optimize an image by grouping pixels of the same color as one larger pixel
                    <ul>
                        <li>C</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default ImageCompression;
