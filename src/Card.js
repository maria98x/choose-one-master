import React from "react";
import { Image, Button, Card, ButtonGroup } from "react-bootstrap";
import css from "./App.module.css";
import { addAnswerToQuestion } from "./DATA";
import { useDispatch } from "react-redux";
import { addAnswerToAll } from "./actions";

function addAnswer(props, e, dispatch) {
  var creator = props.creator.split(" ").join("").toLocaleLowerCase();

  addAnswerToQuestion(e.target.value, creator, props.questionId);
  dispatch(addAnswerToAll(e,props,creator))
  // dispatch(addNewAnswerToUser(e.target.value, creator, props.questionId));
  // dispatch(addNewAnswerToQuestion(e.target.value, creator, props.questionId));
  // dispatch(updateAuth(e.target.value, props.questionId));
}

export default function QuestionCard(props) {
  const dispatch = useDispatch();
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

            <ButtonGroup
              vertical
              onClick={(e) => {
                addAnswer(props, e, dispatch);
              }}
            >
              <Button
                variant="outline-success"
                value="firstOption"
                style={{ width: "20rem" }}
              >
                {props.firstAns}
              </Button>
              <Button
                variant="outline-success"
                value="secondOption"
                className="mt-3"
                style={{ width: "20rem" }}
              >
                {props.secondAns}
              </Button>
            </ButtonGroup>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
