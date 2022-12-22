import logo from './logo.svg';
import './App.css';
import VeterinaireList from './components/list.component';
import CreateVeterinaire from './components/createveterinaire.component';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModifierVeterinaire from './components/modifveterinaire.component';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
             <Link to="/">Liste Veterinaires</Link>
            </li>
            <li>
             <Link to="/veterinaire/create">Créer un véterinaire</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<VeterinaireList/>}/>
          <Route path='/veterinaire/create' element={<CreateVeterinaire/>}/>
          <Route path='/veterinaire/modifier/:id' element={<ModifierVeterinaire/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
