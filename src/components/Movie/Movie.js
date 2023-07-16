import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ModalMovie from "../ModalMovie/ModalMovie";
import './Movie.css'

function Movie({ data }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <div className="movie-div">
            < Card className="card-div" >
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Button variant="primary" onClick={handleShow}>Add To Favorite</Button>
                </Card.Body>
            </Card>
            <ModalMovie data = {data} handleClose = {handleClose} handleShow = {handleShow} show = {show} />
        </div>
    );
}
export default Movie;