import React from "react"
import axios from "axios"
import styled components from "styled-components"




export default  class App extends React.Component{ 
    const executeRequest =  async () => {
        const body = {
            name = ""
        };
        
        const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
        headers: {
            Authorization: "fernando-taveiraorsini-carver"   
        }

        }
             
        );

        console.log(response)
         
    } 
      
    render() {
      return (
        <div>
          <h2>Playlist</h2>
          <button onClick={executeRequest}>Criar Playlist</button>
        </div>
      );

    
    }
};


