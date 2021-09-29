import React,{Component} from 'react'
import {Route, BrowserRouter as Router ,Link,Switch} from "react-router-dom"
import TeamService from "../repository/temaRepositiry";
import './teamCSS.css';
import 'bootstrap/dist/css/bootstrap.css';
import TeamInfo from "./teamInfo";
import Cleveland from "../image/Cleveland.jpeg";
import orleans from "../image/nb.png"
import nw from "../image/nw.png";
import nwk from "../image/nwk.png";
import uj from "../image/uj.png";
import lac from "../image/lac.png";
import dm from  "../image/dm.png";
import hr from  "../image/hr.jpeg";
import p from  "../image/p.png";
import ww from  "../image/ww.png";
import down from  "../image/download.png";
import lal from  "../image/lakers.png";

import * as ReactBootStrap from "react-bootstrap";

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    }
    componentDidMount(){
        this.getTeams();
    }


    getTeams = () =>{
        function onlyUnique(value,index,self){
            return self.indexOf(value) === index;
        }
        TeamService.fetchTeam().then(result=>{
           const teams = result.data

            this.setState({teams:teams});

           console.log(this.state.teams[0].id);
        });
    }
    render() {

    if (this.state.teams != null) {
        const teams = this.state.teams;
        return (
            <>


                <div>
                    {/*<ReactBootStrap.Table striped border hover>*/}
                    {/*    <thead>*/}
                    {/*        <tr>*/}
                    {/*            <th>Name</th>*/}
                    {/*        </tr>*/}
                    {/*    </thead>*/}
                    {/*    {this.state.teams.map((team,index)=>*/}
                    {/*        <tr key={index}>*/}
                    {/*            <td><Link to={`/team/${team.name}`}>{team.name}</Link></td>*/}
                    {/*        </tr>*/}
                    {/*    )}*/}
                    {/*    <tbody>*/}

                    {/*    </tbody>*/}
                    {/*</ReactBootStrap.Table>*/}

                    <div className={"row row-cols-1 row-cols-md-3 mb-3 text-center"}>
                        <div className={"col teamCard"}>
                            <img src={Cleveland} style={{width: '150px', }} />
                            <Link to={`/team/${this.state.teams[1]?.id}`} style={{ color: 'black', 'font-size': '1.5em', 'font-weight': 'bold', 'text-decoration': 'none'}} > {this.state.teams[1]?.name}
                                   </Link>
                        </div>
                        <div className={"col teamCard"}>
                            <img src={nw} style={{width: '150px'}} />
                            <Link className={"teamLink"} to={`/team/${this.state.teams[2]?.id}`} > {this.state.teams[2]?.name}</Link>

                        </div>
                        <div className={"col teamCard"}>
                            <img src={nwk} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[3]?.id}`} > {this.state.teams[3]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>
                            <img src={uj} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[4]?.id}`} > {this.state.teams[4]?.name}</Link>

                        </div>
                        <div className={"col teamCard"}>

                            <img src={orleans} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[5]?.id}`} > {this.state.teams[5]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>

                            <img src={lac} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[6]?.id}`} > {this.state.teams[6]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>

                            <img src={lal} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[7]?.id}`} > {this.state.teams[7]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>

                            <img src={p} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[12]?.id}`}  > {this.state.teams[12]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>

                            <img src={hr} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[11]?.id}`} > {this.state.teams[11]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>

                            <img src={ww} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[13]?.id}`} > {this.state.teams[13]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>

                            <img src={dm} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[14]?.id}`} > {this.state.teams[14]?.name}</Link>
                        </div>
                        <div className={"col teamCard"}>

                            <img src={down} style={{width: '150px'}} />
                            <Link className="teamLink" to={`/team/${this.state.teams[15]?.id}`} > {this.state.teams[15]?.name}</Link>
                        </div>

                    </div>

                </div>
            </>
        );
    }
    return (
        <div>Loading</div>
    );
    }
}
export default Team;
