import React from "react"
import axios from "axios"



export default class SuasPlaylists extends React.Component {

    state = {
        name: "",
        list: "",
        quantity:"",
        id: ""

    }

    handleName = (event) => {
        this.setState({name: event.target.value})
    }

    handleList = (event) => {
        this.setState({list: event.target.value})
    }

    handleQuantity = (event) => {
        this.setState({quantity: event.target.value})
    }

    handleId = (event) => {
        this.setState({id: event.target.value})
    }

    verSuasPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name,
            list: this.state.name,
            quantity: this.state.name,
            id: this.state.name
        }

        axios.get(url, body, {
            headers: {
                Authorization: "fernando-taveiraorsini-carver"
            }
        })
        
        
    }

    deletarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"
        const body = {
            "result": {
                "quantity": "number",
                "list": [
                    {
                        "id": "string",
                        "name": "string"
                    }
                ]
            }
        }

        axios.del(url, body, {
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
          value={this.state.name}
          />
           <input 
          placeHolder={"Lista"}
          value={this.state.list}
          />
           <input 
          placeHolder={"Quantidade"}
          value={this.state.quantity}
          />
          
          
        </div>
      );
    }
    }