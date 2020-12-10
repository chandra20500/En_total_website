import React,{Component} from "react";
import "./cources.css";
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom';

export default function Cources(){
  const location = document.location.pathname;
  const [selected , ChangeSelect] = React.useState(location);
  const history = useHistory();

  const routeChange = (p) => {
    let path = `${p}`;
    ChangeSelect(`${p}`);
    console.log({selected});
    history.push(path);
  };
  return (
    <div>
      <div>
        <h2 className="cources-heading">Classroom</h2>
        <span className="bordered-icon">
          <i className="fa fa-th-large"></i>
        </span>
      </div>
      <div className="cources-options" onClick={() => routeChange('/Login')}>
        <div>
          <img
            src="./online-learning.svg"
            style={{ height: "150px", widht: "150px" }}
          />
          <h3>Register</h3>
        </div>
        <div>
          <img
            src="./e-learning.svg"
            style={{ height: "150px", widht: "150px" }}
          />
          <h3>previous year Solutions</h3>
        </div>
        <div>
          <img
            src="./call-center.svg"
            style={{ height: "150px", widht: "150px" }}
          />
          <h3>Contact US</h3>
        </div>
      </div>
    </div>
  );
}