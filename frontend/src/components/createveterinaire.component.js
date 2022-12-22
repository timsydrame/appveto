import React from "react";

class CreateVeterinaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nom: '',
        prenom: '',
        adresse: '',
        email: '',
        password: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      const { nom, prenom, adresse, email, password} = this.state
      fetch("http://127.0.0.1:8000/api/veterinaires", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: nom,
                prenom: prenom,
                adresse: adresse,
                email: email,
                password: password
            })
        }
      )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom:
            <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
          </label><br/>

          <label>
            Prenom:
            <input type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
          </label><br/>

          <label>
            Adresse:
            <input type="text" name="adresse" value={this.state.adresse} onChange={this.handleChange} />
          </label><br/>

          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label><br/>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label><br/>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default CreateVeterinaire;