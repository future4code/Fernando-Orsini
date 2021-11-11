import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`
//text-decoration tem um ternário para alternar entre duas condições: 'line-trough' se verdadeiro e 'none'
//se falso.

//Tarefa é uma lista ordenada e um styled component (?)
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(), 
        texto: 'Texto da tarefa',
        completa: false 
      },
      {
        id: Date.now(), 
        texto: 'Texto da segunda tarefa',
        completa: true 
      }],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({tarefas: event.target.value})

  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), 
      texto:  
      completa: false 
    }

    const copiaDoEstado = [...this.state.tarefas]

    copiaDoEstado.push(novaTarefa)

  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
//A variável listaFiltrada usa a condicional switch case (a função dele é testar a igualdade). 
//O this.state filtra tarefas com o parâmetro tarefa
//que é um objeto dentro do array tarefas (?). O return do case 'pendentes' é o oposto de tarefa completa.  
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                //o parâmetro do onClick é tarefa.id(?)
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
