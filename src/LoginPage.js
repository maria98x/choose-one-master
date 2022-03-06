import React, { useEffect, useState } from "react";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Image, Button ,} from "react-bootstrap";
import { getAllUsers } from "./DATA";
import { loadUsers, setAuthUser } from "./actions";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.users);

  useEffect(() => {
    getAllUsers().then((res) => {
      dispatch(loadUsers(res));
    });
  }, []);
  const [value, setValue] = useState("");

  return (
    <div>
      <div className={css.wrapper + " bg-white"}>
        <Image
          className={css.login}
          alt="Profile image"
          src="https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png"
          roundedCircle
        ></Image>
        <br />

        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          title="Select user"
          className={css.center}
        >
          <option>Select user</option>

          {Object.keys(users).map((name, index) => {
            return <option key={index}> {users[name].fullname}</option>;
          })}
        </select>

        <div className={"text-center "}>
            {" "}
            <Button
              onClick={(e) => {
                if (value.length === 0) {
                  console.log("errr");
                } else {
                  var auth = value.split(" ").join("").toLocaleLowerCase()
                  console.log("correct")
                  dispatch(setAuthUser(users[auth]));
                  navigate("/UnAnsweredQuestions")
                }
              }}
              className="btn btn-info"
            >
              {" "}
              Login
            </Button>
          
        </div>
      </div>
    </div>
  );
}
