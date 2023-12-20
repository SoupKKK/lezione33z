import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './components/Navbar1';
import Books from './components/Books'
import Footer from './components/Footer';
import Welcome from './components/Welcome';

import { Container } from 'react-bootstrap';
import fantasyData from './data/fantasy.json'; // Importa i dati dal file JSON

function App() {
  return (
    <Container>
        <header>
            <Navbar1 />
        </header>
        <Welcome />
  
        <Books books={fantasyData} />
        <Footer />
    </Container>
  );
}

export default App;
