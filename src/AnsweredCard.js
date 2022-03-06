import React from "react";
import { Image, Button, Card } from "react-bootstrap";
import css from "./App.module.css";
export default function AnsweredCard(props) {

  return (
    <div className={"row text-center "}>
      <Card className={css.center + " text-center "} style={{ width: "25rem" }}>
        <div className="col">
          <Card.Header>Question by {props.creator}</Card.Header>
          <Image src={props.img} className={css.cardImg} roundedCircle></Image>
        </div>

        <div className="col">
          <Card.Body>
            <Card.Text> Would you rather:</Card.Text>

            <Button
              style={{ width: "20rem" }}
              variant="outline-success"
              active={props.checkValue1}
              disabled={props.checkValue2}
              className="mb-2 "
            >
              {props.firstOption}
            </Button>
            <Button
              style={{ width: "20rem" }}
              variant="outline-success"
              active={props.checkValue2}
              disabled={props.checkValue1}
              className="mb-2"
            >
              {" "}
              {props.secondOption}
            </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
