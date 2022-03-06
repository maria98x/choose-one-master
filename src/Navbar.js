import React from "react";
import { Image, Nav, Container } from "react-bootstrap";
import css from "./App.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Mynav(props) {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home" className={css.navTitle}>
            Would You Rather
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Link to="/UnAnsweredQuestions " style={{ textDecoration: "none" }}>
              {" "}
              <Nav.Item className={css.padding}>Home</Nav.Item>
            </Link>
            <Link to="/AnsweredQuestions" style={{ textDecoration: "none" }}>
              {" "}
              <Nav.Item className={css.padding}>Answered Questions</Nav.Item>
            </Link>
            <Link to="/AddQuestion " style={{ textDecoration: "none" }}>
              {" "}
              <Nav.Item className={css.padding}>Add a question</Nav.Item>
            </Link>
            <Link to="/LeaderBoard" style={{ textDecoration: "none" }}>
              {" "}
              <Nav.Item className={css.padding}>Leader Board</Nav.Item>
            </Link>
          </Nav>
          <Navbar.Text>
            {" "}
            Welcome,&nbsp; {props.fullname}
            <Image
              className={css.profile}
              alt="Profile image"
              src={props.imgUrl}
              roundedCircle
            ></Image>
          </Navbar.Text>
          <Link to="/Logout">
            {" "}
            <Navbar.Text> Log out</Navbar.Text>{" "}
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}
