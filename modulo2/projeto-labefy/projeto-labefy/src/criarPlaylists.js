import React from "react"
import axios from "axios"



export default class criarPlaylists extends React.Component {
    state = {
        nome: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    fazerPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome 
        }

        axios.post(url, body, {
            headers: {
                Authorization: "fernando-taveiraorsini-carver"
            }
        })
        .then((res) => { 
             alert ("Playlist criada com sucesso!")  
        })
        .catch((err) => {
             alert (err.respose.data.message)
        }) 
        
    }

    render(){
      return (
        <div>
          <h2>Playlist</h2>
          <input 
          placeHolder={"Nome"}
          value={this.state.nome}
          />
          <button>Criar Playlist</button>
        </div>
      );
    }
    }