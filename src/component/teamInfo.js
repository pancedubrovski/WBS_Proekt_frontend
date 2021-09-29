import React,{Component} from "react";
import TeamService from "../repository/temaRepositiry";
import * as ReactBootStrap from "react-bootstrap";
import Team from "./team";



class TeamInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            team: null,
            loading:false,
            players: []
        }
    }
    async componentDidMount() {
        this.getTeamInfo()
    }

    getTeamInfo = () =>{
        const nameTemp = window.location.pathname.split("/")[2]
        const name = nameTemp.replace("%20"," ")
        debugger;
        TeamService.fetchTeamDetail(name).then(result=>{
           const data = result.data

           this.setState({
               team:data
           })
        });

        TeamService.fetchPlayerByTeam(name).then(result=>{

            const data = result.data

            console.log(data)

            this.setState({
                players:data,
                loading: true
            })
        })


    }
    render() {
        if(!this.state.loading){
            return (<div>Loading...</div>)
        }else {

            return (

                <>
                    <div className="col-lg-8 mx-auto py-md-5">
                        <h1>{this.state.team.name}</h1>
                        <p>{this.state.team.description}</p>
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <div className="d-flex text-muted pt-5">
                                <h4>Owner: {this.state.team.owner}</h4>
                            </div>
                            <div className="d-flex text-muted pt-5">
                                <h4>Stadium: {this.state.team.stadium}</h4>
                            </div>
                            <div className="d-flex text-muted pt-5">
                                <h4>Coach: {this.state.team.coach}</h4>
                            </div>
                        </div>

                        {/*<ReactBootStrap.Table striped border hover>*/}
                        {/*    <thead>*/}
                        {/*    <tr>*/}
                        {/*        <th>Name</th>*/}
                        {/*        <th>Description</th>*/}
                        {/*        <th>Owner</th>*/}
                        {/*        <th>Stadium</th>*/}
                        {/*    </tr>*/}
                        {/*    </thead>*/}
                        {/*    <tbody>*/}
                        {/*    <tr>*/}
                        {/*        <td>{this.state.team.name}</td>*/}
                        {/*        <td>{this.state.team.description}}</td>*/}
                        {/*        <td>{this.state.team.owner}}</td>*/}
                        {/*        <td>{this.state.team.stadium}}</td>*/}
                        {/*    </tr>*/}
                        {/*    </tbody>*/}
                        {/*</ReactBootStrap.Table>*/}
                        <h3>Players</h3>
                        <ReactBootStrap.Table striped border hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birthday </th>
                                <th>Description</th>
                                <th>Birthday Place</th>
                                <th>Award</th>
                                <th>Position</th>

                            </tr>
                            </thead>
                            <tbody>
                            {this.state.players.map((player, index) =>
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.birthdayDate}</td>
                                    <td>{player.description}</td>
                                    <td>{player.birthdayPlace}</td>
                                    <td>{
                                        player.playerAwardList.map((a,index)=>
                                            <div key={index}>
                                                {a.award},
                                            </div>
                                    )
                                    }</td>
                                    <td>{player.position}</td>

                                </tr>
                            )}
                            </tbody>
                        </ReactBootStrap.Table>
                    </div>
                </>
            );
        }
    }
};
export default TeamInfo;