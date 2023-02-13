import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate,Outlet } from "react-router-dom"

function Header(props) {
    const Navigate = useNavigate();
    return (
       <>
        {/* 헤더 영역: 상단 네비게이션 바 */}
    <header>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" onClick={() => {Navigate('/');}}>현정네 샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {Navigate('/');}}>홈</Nav.Link>
            <Nav.Link onClick={() => {Navigate('/cart');}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>

    <Outlet/>
       </>
    );
}

export default Header;