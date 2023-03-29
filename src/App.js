import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import CadastroCliente from './components/pages/CadastroCliente';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Container customClass="min_height">

            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/CadastroCliente' element={<CadastroCliente />} />
            </Routes>
          </Container>
        </Router>
      </div>
    </div>
  );
}

export default App;
