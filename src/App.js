import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import CadastroCliente from './components/pages/CadastroCliente';
import CadastroFornecedor from './components/pages/CadastroFornecedor';
import CadastroFuncionario from './components/pages/CadastroFuncionario';
import CadastroProduto from './components/pages/CadastroProduto';
import FormularioPedido from './components/pages/FormularioPedido';
import Home from './components/pages/Home';



function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Container customClass="min_height">
          <NavBar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/CadastroCliente' element={<CadastroCliente />} />
              <Route exact path='/CadastroFornecedor' element={<CadastroFornecedor />} />
              <Route exact path='/CadastroFuncionario' element={<CadastroFuncionario />} />
              <Route exact path='/CadastroProduto' element={<CadastroProduto />} />
              <Route exact path='/FormularioPedido' element={<FormularioPedido />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
