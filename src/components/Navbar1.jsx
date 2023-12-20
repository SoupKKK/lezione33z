import { Navbar, Nav } from 'react-bootstrap'

const Navbar1 = () => (
  <Navbar bg="dark" variant="dark" className='p-4 m-3'>
    <Navbar.Brand href="#home">Books</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Shop</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
  </Navbar>
)

export default Navbar1