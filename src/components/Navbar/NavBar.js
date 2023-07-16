import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">trending</Nav.Link>
                <Nav.Link href="/FavList">Favorite List</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    );
}
export default NavBar;
