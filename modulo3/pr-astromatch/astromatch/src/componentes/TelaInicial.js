import React from 'react';
import axios from 'axios';
import {BASE_URL} from './url'

export default class TelaInicial extends React.Component { 
    state = {
        profileToChoose: [],
        choosePerson: false
    }
    componentDidMount(){
        this.getProfileToChoose()
    }
    

    getProfileToChoose = () => {
        axios.get(`${BASE_URL/person}`)
        .then((res) => this.setState({profileToChoose: res.data.results}))
        .catch((err) => console.log(err.response))
    }

    //provavelmente é outro ciclo de vida o Post choosePerson
    componentDidMount(){
        this.postChoosePerson()
    }
    

    postChoosePerson = () => {
        axios.post(`${BASE_URL/choose-person}`)
        .then((res) => this.setState({choosePerson: res.data.results}))
        .catch((err) => console.log(err.response))
    }


    
    
    render() {

        const profilesList = this.state.profilesList.map((profile) => {
            return <p key={profile.id} >{profile}</p>
        })

        console.log(this.state.profileList)

        return (
            <div> 
                <header>
                <button> Seus Matches</button>
                </header>
               <span> {profileToChoose} </span>
             
           <button> Dar match</button>
           <button>Pular perfil</button> 
            </div>
          );
    }
    
  }

