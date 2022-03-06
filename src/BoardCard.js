import React from "react";
import { Image, Button, Card } from "react-bootstrap";
import css from "./App.module.css";



export default function BoardCard(props) {
  return (
    <div className={"row text-center "}>
      <Card className={css.center + " text-center "} style={{ width: "25rem" }}>
        <div className="col">
          <Card.Header>{props.userName}</Card.Header>
          <Image src={props.img} className={css.cardImg} roundedCircle></Image>
        </div>

        <div className="col">
          <Card.Body>
            <Card.Text> Question Answered: {props.answers}</Card.Text>
            <Card.Text> Question Created: {props.questionsCreated}</Card.Text>
            <Card.Text> <strong> TOTAL: {props.total}</strong></Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}
