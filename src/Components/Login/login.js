import React,{Component,useState} from "react";
import GoogleLogin from 'react-google-login'
import "./Login.css";
import Dashboard from '../Dashboard/DashboardApp'
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
    const [user, setuser] = useState(0);
    const [name, Setname] = useState("");
    const [image, Setimage] = useState("");
    localStorage.setItem("login",false);
    const responseGoogle=(response)=>{
        localStorage.setItem("login",true);
        localStorage.setItem("name",response.profileObj.name);
        localStorage.setItem("image",response.profileObj.imageUrl);
        routeChange("/Dashboard");
    };
    const responseGooglefail=(response)=>{
        alert("Login unsuccessfull");
    };
    return (
        <div>
            { localStorage.getItem("login")
            ? <Dashboard  
              />
            : <div className="LoginPageComtainer">
                    <h6 className="LoginPageHeading">
                        Physics EN Total
                    </h6>
                    <GoogleLogin
                        clientId="42938001878-e2s6pdfpfihev3i5p2muuf3hl49ji52f.apps.googleusercontent.com"
                        buttonText="Login With Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGooglefail}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
        }
        </div>
        
    );
}