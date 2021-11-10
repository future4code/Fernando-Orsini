import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fmao1-1.fna.fbcdn.net/v/t1.6435-9/43467130_294083998097171_6541198723240689664_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FeJeJvQya8cAX-gElfB&_nc_ht=scontent.fmao1-1.fna&oh=9bc5308e3e7421b36ebf8cf5192ecdfe&oe=61AA0056"  
          nome="Fernando" 
          descricao="Oi, eu sou o Fernando Taveira. Sou estudante da Labenu. Sou professor de História. Trabalho há 6 anos na SEUDC AM. Gostaria de mudar de profissão e me tornar um dev full stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

        <h2>Experiências profissionais</h2>
        
        <CardGrande 
          nome="SEDUC" 
          descricao="PROFESSOR" 
        />
      </div>

      <div className="page-section-container">
      <h2>MEUS DADOS</h2>
      <CardPequeno 
          nome="EMAIL" 
          descricao="MEUEMAIL@.COM" 
        />

        <CardPequeno 
          nome="ENDEREÇO" 
          descricao="RUA MINHA CASA" 
        />
        </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>

        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
