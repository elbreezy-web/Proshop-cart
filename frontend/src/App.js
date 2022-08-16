import react from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Container } from  'react-bootstrap'
import Header from './component/header';
import Footer from './component/footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';




function App() {
  return (
    <Router>
    <Header/>
      <main className="py-4">
        <Container>
        <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route  path="product/:id" element={<ProductScreen />} /> 
       </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
