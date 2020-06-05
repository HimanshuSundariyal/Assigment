import React from 'react';
import { Container, Row,Alert } from 'react-bootstrap';

const Nomatch = () =>{
    return(
        <Container fluid="md">
        <Row>
        <Alert variant="warning">
            Page You are Looking in not Found
         </Alert>   
        </Row>
      </Container>   
    )
}

export default Nomatch;