import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'hendrix'}
          fotoUsuario={'https://upload.wikimedia.org/wikipedia/commons/a/ae/Jimi_Hendrix_1967.png'}
          fotoPost={'https://picsum.photos/200/150'}
        />
 <Post
          nomeUsuario={'lenon'}
          fotoUsuario={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/John_Lennon_abbey_road.jpg/453px-John_Lennon_abbey_road.jpg'}
          fotoPost={'https://picsum.photos/200/150'}
        />

      

      </MainContainer>


      

      
    );
  }
}

export default App;


class App extends React.Component {
  
  state = {
  
    usuarios: [
  
      {
        nomeUsuario:"paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"hendrix",
          fotoUsuario:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Jimi_Hendrix_1967.png",
          fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"lenon",
          fotoUsuario:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/John_Lennon_abbey_road.jpg/453px-John_Lennon_abbey_road.jpg",
          fotoPost:"https://picsum.photos/200/150"
      }
    ]
  };

  render() {
    
    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      
      return (
        <p>
          {usuario.nomeUsuario} - {usuario.fotoUsuario} - {usuario.fotoPost} 
        </p>
      );
    });

    return (
      <div>
        <h1>Posts</h1>
        
        <div>{listaDeUsuarios}</div>
      </div>
    );
  }
}

export default App;




class App extends React.Component {
  state = {
    
    valorInputTextoUm: "",
    valorInputTextoDois: "",
    valorInputTextoTres: ""
  };

  adicionaTexto = () => {
    
    const formulario = {
      
      textoUm: this.state.valorInputTextoUm,
      
      textoDois: this.state.valorInputTextoDois,

      textoTres: this.state.valorInputTextoTres
    };

    const formulario = [...this.state.usuarios, formulario];


    this.setState({ usuarios: formulario });
  };

  onChangeInputTextoUm = (event) => {
   
    this.setState({ valorInputTextoUm: event.target.value });
  };
  onChangeInputTextoDois = (event) => {
   
    this.setState({ valorInputTextoDois: event.target.value });
  };
  onChangeInputTextoTres = (event) => {
   
    this.setState({ valorInputTextoTres: event.target.value });
  };

  render() {
   
    return (
      <div>
        <h1>Formulário</h1>
        <div>
          <input
        
            value={this.state.valorInputTextoUm}
            
            onChange={this.onChangeInputTextoUm}
            placeholder={"TextoUm"}
          />
           <input
        
        value={this.state.valorInputTextoDois}
        
        onChange={this.onChangeInputTextoDois}
        placeholder={"TextoDois"}
      />
            <input
        
        value={this.state.valorInputTextoTres}
        
        onChange={this.onChangeInputTextoTres}
        placeholder={"TextoTres"}
      />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        
      </div>
    );
  }
}

export default App;
