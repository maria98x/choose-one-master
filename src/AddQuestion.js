import Mynav from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import React, {  useState } from "react";
import css from "./App.module.css";
import { addQuestion ,} from "./DATA";
import { addQuestionToAll } from "./actions";
import { useNavigate } from "react-router-dom";


function checkQuestions(value1,value2,authUser,dispatch,navigate){
  if (value1.length > 0 && value2.length > 0) {
    var firstOption = value1;
    var secondOption = value2;
    var creator = authUser.fullname
      .split(" ")
      .join("")
      .toLocaleLowerCase();
    const obj = {
      creator: creator,
      answerOne: firstOption,
      answerTwo: secondOption,
    };

    addQuestion(obj).then((Newquestion) => {
      dispatch(addQuestionToAll(Newquestion,creator,Newquestion.id))
      navigate("/UnAnsweredQuestions")

    
    }); 


  }
}
export default function AddQuestion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((store) => store.authUser);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div>
      <Mynav fullname={authUser.fullname} imgUrl={authUser.imgUrl} />
      <div className={css.wrapper + " bg-white "}>
        <h5> Ask people Something !</h5>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              onChange={(e) => setValue1(e.target.value)}
              className="mt-3"
              type="firstOption"
              placeholder="Enter First Option"
            />
            <Form.Control
              onChange={(e) => setValue2(e.target.value)}
              className="mt-2"
              type="secondOption"
              placeholder="Enter Second Option"
            />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              variant="secondary"
              className="text-center"
              onClick={(e) => {
                checkQuestions(value1,value2,authUser,dispatch,navigate)

              }}
            >
              Submit
            </Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
}
