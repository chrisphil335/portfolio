import DeleteDuplicates from "./DeleteDuplicates";
import Companion from "./Companion";
import Froggy from "./Froggy";
import CloneCraft from "./CloneCraft";
import SuperChess from "./SuperChess";
import ImageCompression from "./ImageCompression";
import EdgeDetection from "./EdgeDetection";
import Website from "./Website";
import CardGroup from "react-bootstrap/CardGroup";

const Projects = () => (
    <div>
        <h1>Projects</h1>
        <hr></hr>
        <div style={{textAlign: "left"}}>
            <CardGroup style={{justifyContent: "center"}}>
                <Website />
                <DeleteDuplicates />
                <ImageCompression />
                <SuperChess />
                <Companion />
                <CloneCraft />
                <EdgeDetection />
                <Froggy />
            </CardGroup>
        </div>
    </div>
);

export default Projects;
