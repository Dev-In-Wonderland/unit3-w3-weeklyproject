import { Col, Container, Nav, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={2}>
            <Nav
              className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between p-3 align-items-center"
              id="sidebar"
            >
              <div className="nav-container">
                
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <ul>
                      <li>
                        <a className="nav-item nav-link" href="index.html">
                          <FaHome />
                          &nbsp; Home
                        </a>
                      </li>
                      <li>
                        <a className="nav-item nav-link" href="#hgf">
                          <BsFillBookFill />
                          &nbsp; Library
                        </a>
                      </li>
                      <li>
                        <div className="input-group mt-3">
                          <input
                            type="text"
                            className="form-control mb-2"
                            id="searchField"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div
                            className="input-group-append"
                            style={{ marginBottom: "4%" }}
                          >
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              id="button-addon1"
                            >
                              GO
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="nav-btn d-flex flex-column ">
                <button className="btn signup-btn" type="button">
                  Sign Up
                </button>
                <button className="btn login-btn" type="button">
                  Login
                </button>
                <div className="d-flex ms-3">
                  <a href="#g">Cookies</a> |<a href="#gg"> Settings</a>
                </div>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
