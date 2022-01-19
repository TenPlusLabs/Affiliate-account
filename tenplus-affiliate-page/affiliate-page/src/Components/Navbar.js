import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Navbar, NavDropdown, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';


const NavBar = () => {
    return (
      <Navbar fixed="top" bg="black" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">TenPlus</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link >
                <Link className="navlink"  to="/test">Home</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link className="navlink" to="/product">Product</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link className="navlink" to="/homecontent">Account</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link className="navlink" to="/withdrawal">Withdrawal</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link className="navlink" to="payment">Payment</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link className="navlink" to="promote">Payments</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link className="homecontent" to="account">Promote</Link>
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Product</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Withdrawal</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Withdrawal</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              {/* <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              <Button className="nav-button" variant="outline-success">
                <Link className="navlink navbtn" to="/login">Log in</Link>
              </Button>
              <Button className="nav-button" variant="outline-success">
                <Link className="navlink navbtn" to="/signup">Singup</Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
  </Navbar>
    );
}
 
export default NavBar












{/* <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed">
            <a className="navbar-brand" href="#">TenPlus</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">             
                  <Link className="navlink" className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/payment">New Link 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/homecontent">Account</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/useraccount">New Link 3</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/test">Test 3</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/withdraw">Sell</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Payment</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Youuuuu</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
              <ul classNameName="navbar-nav ml-auto">
                <li className="nav-item nav-log">
                    <Link className="nav-link navbar-log" to="/login" tabindex="-1" aria-disabled="true">Login</Link>
                </li>
                <li className="nav-item nav-log">
                    <Link className="nav-link navbar-log" to="/signup" tabindex="-1" aria-disabled="true">Sign In</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-md-0">
                <input className="form-control" type="text" placeholder="Search" />
              </form>
            </div>
          </nav>
        </div> */}