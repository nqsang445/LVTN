import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                        <NavLink
                            to="/danhsachdetai"
                        >DANH SÁCH ĐỀ TÀI</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink
                            to="/"

                        >ĐĂNG NHẬP</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
export default Menu;
