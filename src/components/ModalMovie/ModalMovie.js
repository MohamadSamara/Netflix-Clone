import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalMovie({ data, handleClose, show }) {
  const [commentValue, setCommentValue] = useState('');
  const commentInputRef = useRef(null);

  // const handleCommentChange = () => {
    
  // };

  async function handleAddToFavorite() {
        setCommentValue(commentInputRef.current.value);
        let comment = commentInputRef.current.value;
    if (comment.trim() === "") {
      comment = "No comment";
    }
    let url = `${process.env.REACT_APP_SERVER_URL}/addMovie`;
    let objData = {
      title: data.title,
      release_date: data.release_date,
      poster_path: data.poster_path,
      overview: data.overview,
      comment: comment,
    };
  
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objData),
      });
  
      if (response.status === 201) {
        alert('Added successfully');
      } else {
        console.log('Error:', response.statusText);
        alert('Failed to add movie');
      }
    } catch (error) {
      console.log('Error:', error.message);
      alert('Failed to add movie');
    }
  }  

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
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={data.title}
            height={'5px'}
            width = {'100%'}
          />
          <p>{data.overview}</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} ref={commentInputRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToFavorite}>
            Add To Favorite
          </Button>
        </Modal.Footer>
        <p>{commentValue}</p>
      </Modal>
    </>
  );
}

export default ModalMovie;
