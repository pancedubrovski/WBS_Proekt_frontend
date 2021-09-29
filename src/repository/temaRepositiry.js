import React from 'react'
import axios from '../axios/axios'
const TeamService = {
    fetchTeam: () =>{

        return axios.get("/team");
    },
    fetchTeamDetail: (name) =>{
        return axios.get(`/team/${name}`)
    },
    fetchPlayerByTeam: (teamName)=>{
        return axios.get(`/player/${teamName}`)
    }
}
export default TeamService;