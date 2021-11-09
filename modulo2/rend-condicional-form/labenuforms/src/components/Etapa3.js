import React from "react";

export default class Etapa3 extends React.Component {
  state = {
    functionEtapa3() {
        return (
          <form>
            <label>Por que você não terminou um curso de graduação?
              <input type="text" />
            </label>
            <label>Você fez algum curso complementar?
              <select>
  <option value="Curso técnico">Curso técnico</option>
  <option value="Cursos de inglês">Cursos de inglês</option>
  <option value="Não fiz curso complementar">Não fiz curso complementar</option>
             </select>
              </label>
          </form>
        )
      }