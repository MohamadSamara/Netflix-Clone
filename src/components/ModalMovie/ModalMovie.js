import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalMovie( { data , handleClose , show  } ) {
    if (!data) {
     return null; // Add a null check to handle the case when data is undefined
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src ={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} height={"400px"} width={"100%"}/>
                <p>{data.overview}</p>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add To Favorite
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalMovie;