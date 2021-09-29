import logo from './logo.svg';
import './App.css';
import Team from "./component/team";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TeamInfo from "./component/teamInfo";
import React from "react";

function App() {
  return (
    <div className="App">
        <div className="container">

            {/*<header>*/}
            {/*    <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark ">*/}
            {/*        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"*/}
            {/*                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon"></span>*/}
            {/*        </button>*/}
            {/*        <div className="collapse navbar-collapse" id="navbarCollapse">*/}
            {/*            <ul className="navbar-nav mr-auto">*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a >*/}
            {/*                        <p>Почетна</p>*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a >*/}
            {/*                        <p>adadasd</p>*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</header>*/}
            <Router>
                <Switch>

                    <Route path={"/"} exact={true} component={Team} />

                    <Route path={"/team/:name"} exact={true} component={TeamInfo}  />



                </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
