import React from 'react';
import { Container, Row, Button, Col,Table } from 'react-bootstrap';

const Search = ({ searchByName, searchByProductType }) => {
  return (
    <Container fluid="md">
    <Row>
        <Col className="text-left">
        <div className="form-group">
            <label>Search by Product Name:</label>
            <input type="text"  className="form-control" id="product_name" onBlur={searchByName} /> 
        </div>
        </Col>
        <Col className="text-left">
        <div className="form-group">
            <label>Search by Product Type:</label>
            <select name="product_type" className="form-control" id="product_type" onChange={searchByProductType}>
                <option value="simple">Simple</option>
                <option value="Virtual">Virtual</option>
                <option value="Dynamic">Dynamic</option>
            </select>  
        </div>
        </Col>
    </Row>
    </Container>
  );
};

export default Search;

