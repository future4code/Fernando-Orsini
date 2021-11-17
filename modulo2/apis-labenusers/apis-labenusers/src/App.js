import React from "react";
import axios from "axios";


export default class App extends React.Component {
  state = {
    usuarios: [],
    inputValue: ""
  };

  componentDidMount() {
    this.getUsuarios();
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  createUser = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
        {
          headers: {
            Authorization: "fernando-taveiraorsini-carver"
          }
        }
      )
      .then((res) => {
        this.setState({ users: res.data.result.list });
        console.log(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  getAllUsers = () => {
    const body = {
      name: this.state.inputValue
    };
    axios
      .post(
        " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
        body,
        {
          headers: {
            Authorization: "fernando-taveiraorsini-carver"
          }
        }
      )
      .then((res) => {
        this.setState({inputValue: ''})
        this.getAllUsers()
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    const usersList = this.state.users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));
    return (
      <div className="App">
        <input
          placeholder={"Nome do Usuario"}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <input
          placeholder={"Email"}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.createUser}>Criar user</button>
        {this.state.users.length > 0 ? (
          <ul>{usersList}</ul>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

