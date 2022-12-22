import React from "react";
import { Link } from "react-router-dom";

class VeterinaireList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        veterinaires: []
      };
    }

    suppVeterinaire(id){
        console.log(id);
        fetch(`http://127.0.0.1:8000/api/veterinaires/`+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        )
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/veterinaires")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              veterinaires: result.data
            });
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
        )
    }
  
    render() {
      const { error, isLoaded, veterinaires } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Adresse</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {veterinaires.map(veterinaire => (
                <tr key={veterinaire.id}>
                    <td>{veterinaire.nom}</td>
                    <td>{veterinaire.prenom}</td>
                    <td>{veterinaire.email}</td>
                    <td>{veterinaire.adresse}</td>
                    <td>
                        <button><Link to={{pathname: "/veterinaire/modifier/" + veterinaire.id}}>Modifier</Link></button>
                        &nbsp;
                        <button onClick={() => this.suppVeterinaire(veterinaire.id)}>Supprimer</button>
                    </td>
                </tr>
                ))}
            </tbody>
          </table>
        );
      }
    }
  }

  export default VeterinaireList;