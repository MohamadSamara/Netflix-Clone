import React, { useEffect, useState, useRef } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './FavList.css';

function FavList() {
  const [favList, setFavList] = useState([]);
  const [editId, setEditId] = useState(null);
  const editCommentRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);

  async function handleFavList() {
    const url = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
    let response = await fetch(url);
    let receivedData = await response.json();
    setFavList(receivedData);
  }

  async function handleDelete(id) {
    const url = `${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      alert('Deleted successfully');
    } else {
      console.log('Error:', response.statusText);
      alert('Failed to delete movie');
    }
    handleFavList();
  }

  async function handleUpdate(id) {
    const url = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;

    const movieToUpdate = favList.find((obj) => obj.id === id);

    const updatedMovie = {
      title: movieToUpdate.title,
      release_date: movieToUpdate.release_date,
      poster_path: movieToUpdate.poster_path,
      overview: movieToUpdate.overview,
      comment: editCommentRef.current.value,
    };

    try {
      setIsSaving(true);
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMovie),
      });

      if (response.status === 200) {
        alert('Comment updated successfully');
        handleFavList();
      } else {
        alert('Failed to update comment');
      }
    } catch (error) {
      console.log('Error:', error.message);
      alert('Failed to update comment');
    } 
      setIsSaving(false);
      setEditId(null);
    
  }

  useEffect(() => {
    handleFavList();
  }, []);

  return (
    <div className="main-div">
      {favList.map((obj) => (
        <Card className="main-card" key={obj.id}>
          <Card.Img className="card-img" variant="top" src={`https://image.tmdb.org/t/p/original/${obj.poster_path}`} />
          <Card.Title className="card-title">{obj.title}</Card.Title>
          <Card.Body>
            {editId === obj.id ? (
              <Form>
                <Form.Group controlId="formComment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Your Comment"
                    ref={editCommentRef}
                  />
                </Form.Group>
                {isSaving ? (
                  <Button variant="primary" disabled>
                    Saving...
                  </Button>
                ) : (
                  <Button variant="primary" onClick={() => handleUpdate(obj.id)}>
                    Save
                  </Button>
                )}
              </Form>
            ) : (
              <>
                <Card.Text className="card-comment">{obj.comment}</Card.Text>
                <div className="card-buttons">
                  <Button variant="danger" onClick={() => handleDelete(obj.id)}>
                    Delete
                  </Button>
                  <Button variant="primary" onClick={() => setEditId(obj.id)}>
                    Edit
                  </Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FavList;
