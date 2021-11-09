import React from "react";



export default class Etapa1 extends React.Component {
  state = {
    functionEtapa1() {
        <form>
            <label>Qual o seu nome?
              <input type="text" />
            </label>
            <label>Qual a sua idade?
              <input type="number" />
              </label>
              <label>Qual o seu email?
              <input type="text" />
              </label>
              <label>Qual o seu email?
              <input type="text" />
              </label>
              <label>Qual o seu grau de formação?
              <select>
  <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
  <option value="Ensino Médio Completo">Ensino Médio Completo</option>
  <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
  <option value="Ensino Superior Completo">Ensino Superior Completo</option>
             </select>
              </label>
          </form>
        )
      }