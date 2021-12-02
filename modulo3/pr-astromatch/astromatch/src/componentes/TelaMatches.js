import React from 'react';
import axios from 'axios';
import {BASE_URL} from './url'

export default class TelaMatches extends React.Component {
    state = {
        matches: []
    } 
    componentDidMount(){
        this.getMatches()
    }
    

    getMatches = () => {
        axios.get(`${BASE_URL/matches}`)
        .then((res) => this.setState({matches: res.data.results}))
        .catch((err) => console.log(err.response))
    }

    
    
    render() {

        const matches = this.state.matches.map((match) => {
            return <p key={match.id} >{match}</p>
        })

        console.log(this.state.matches)

        return (
            <div> {matches} 
           <button> Dar match</button>
           <button>Pular perfil</button> 
            </div>
          );
    }
    
  }