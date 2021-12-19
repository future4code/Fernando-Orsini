import React, { useState, useEffect } from "react";
import axios from 'axios';
import TelaMatches from "./TelaMatches";

export default function TelaInicial() { 
    const [telaInicial, setTelaInicial] = useState(true);
    const [perfil, setPerfil] = useState({})
    const [proximoPerfil, setProximoPerfil] = useState(0)
    const [like, setLike] = useState(false) 
    const [carregando, setCarregando] = useState("")

    const mudarTela = () => {
        setTelaInicial(!TelaInicial) 
      }

    const getProfileToChoose = () => {
        setCarregando("Carregando")
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then((resposta) => {
        const novoPerfil = resposta.data.profile
        setPerfil(novoPerfil)    
        setCarregando("Carregou")
    }) 
        .catch((err) => {
        console.log(err.response)
        setCarregando("Deu ruim!")
        }) 
    }

    useEffect(() => {
        getProfileToChoose()
    }, [proximoPerfil])

    const novoPerfil = () => {
        setProximoPerfil(proximoPerfil +1)
    }
   
    const curtirPerfil = (like) => {
        setLike(like)
        proximoPerfil()
    }

    const postChoosePerson = () => {
        const body = {
            id: perfil.id,
            choice: like
        }
        console.log(body)
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person")
        .then((res) => {
            console.log(res)
            if (res.data.isMatch){
            window.alert("Você tem um novo match!")
            }
        }) 
        .catch((err) => {
        console.log(err.response)
        })
    }

        return (
            <div>
                {
                    telaInicial ?
                    <div> {
                        carregando === "Carregando" ?
                        <h1>Carregando</h1>
                        :
                <>
                    {
                        perfil.id ?
                        <>
                        <p>{perfil.name} </p>
                        <button onClick={() => curtirPerfil(true)}>Like</button>
                        <button onClick={() => curtirPerfil(false)}>Dislike</button>
                        </>
                        :
                        <p>Não tem nenhum perfil disponível</p>
                    }
                        
                </>
                }
                <button onClick={novoPerfil}>Próximo</button> 
                   </div>
            :
            <TelaMatches perfil={perfil}/>
        }
        <button onClick={mudarTela}>Mudar tela</button>
          </div>
          
);
    
}

