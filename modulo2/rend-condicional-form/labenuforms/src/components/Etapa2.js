import React from "react";


export default class Etapa2 extends React.Component {
  state = {
    functionEtapa2() {
        return (
            <form>
            <label>Qual o seu curso?
              <input type="text" />
            </label>
            <label>Qual a unidade de ensino??
              <input type="number" />
              </label>
          </form>
        )
      }
