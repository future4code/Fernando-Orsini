import React from "react"



export default class suasPlaylists extends React.Component {

    state = {
        playlists: ""
    }

    handlePlaylists = (event) => {
        this.setState({nome: event.target.value})
    }

    verPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome 
        }

        axios.post(url, body, {
            headers: {
                Authorization: "fernando-taveiraorsini-carver"
            }
        })
        
        
    }

    render(){
      return (
        <div>
          <h2>Suas Playlist</h2>
          <input 
          placeHolder={"Nome"}
          value={this.state.nome}
          />
          
          
        </div>
      );
    }
    }