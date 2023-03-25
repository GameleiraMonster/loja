import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Container customClass="min_height">
            <NavBar />
          </Container>
        </Router>

      </div>
    </div>
  );
}

export default App;
