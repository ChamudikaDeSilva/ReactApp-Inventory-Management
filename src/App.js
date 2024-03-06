import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import ProductList from "./components/product/list.component";
import CreateProduct from "./components/product/create.component";

function App() {
  return (<Router>
    <Navbar  style={{ backgroundColor: '#365486' }}>
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Basic Crud App using React and Laravel
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5" style={{ minHeight: '100vh' }}> {/* Set minimum height to full viewport height */}
      <Row className="h-100">
        <Col md={12} className="d-flex align-items-center justify-content-center">
          <Routes>
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/' element={<ProductList />} />
          </Routes>
        </Col>
      </Row>
    </Container>

    
  </Router>);
}

export default App;
