// Exercício 6 -------------------------------------------------------------------------------------
//Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e 
//mude o valor da propriedade imunização para “completa” para isso vamos te fornecer uma lista de usuários.

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    return usuarios
} 
    
    const aquiEstaOValorDoReturn = segundaDose( )
    

let i

let imunizacao


const validarSegundaDose = (usuarios) => {
    for(let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].imunizacao === "incompleta"){
            usuarios[i].imunizacao = "completa" 
        }
    }
        console.log(usuarios)
        return usuarios
}

validarSegundaDose(aquiEstaOValorDoReturn)
console.log(imunizacao)
