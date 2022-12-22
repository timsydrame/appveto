import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ModifierVeterinaire = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [ veterinaire, setVeterinaire] = useState([]);

    useEffect(
        () => {
            getVeterinaire();
        }, []
    );

    const getVeterinaire = () => {
        fetch(`http://127.0.0.1:8000/api/veterinaires/`+id)
        .then(res => res.json())
        .then(data => {
            console.log('reponse GET by id');
            console.log(data);
            setVeterinaire(data.data);
        })
    }

    const handleChange = (event) => {
        setVeterinaire({...veterinaire, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        console.log(veterinaire);
        fetch(`http://127.0.0.1:8000/api/veterinaires/`+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: veterinaire.nom,
                prenom: veterinaire.prenom,
                adresse: veterinaire.adresse,
                email: veterinaire.email,
                password: veterinaire.password
            })
        }
        )
        .then(res => res.json())
        .then(
        (result) => {
            console.log(result);
        },
        (error) => {
            setVeterinaire({
                isLoaded: true,
                error
            });
        }
        );
        event.preventDefault();
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Nom:
            <input type="text" name="nom" value={veterinaire.nom} onChange={handleChange} />
        </label><br/>

        <label>
            Prenom:
            <input type="text" name="prenom" value={veterinaire.prenom} onChange={handleChange} />
        </label><br/>

        <label>
            Adresse:
            <input type="text" name="adresse" value={veterinaire.adresse} onChange={handleChange} />
        </label><br/>

        <label>
            Email:
            <input type="email" name="email" value={veterinaire.email} onChange={handleChange} />
        </label><br/>

        <label>
            Password:
            <input type="password" name="password" value={veterinaire.password} onChange={handleChange} />
        </label><br/>

        <input type="submit" value="Submit" />
        </form>
    );
}

export default ModifierVeterinaire;