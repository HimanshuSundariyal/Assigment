import React from 'react';
import { Container, Row, Button, Col,Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Product from './product';
import Search from './search';
import Pagination from './pagenation';


class productListing extends React.Component{
        constructor(props)
        {
            super(props);
            this.state={
                product_list: [],
                pageNumber:1,
            }
        }
    paginate = (pageNumber)=>{
        this.setState({pageNumber});
    }

    searchByName = (e) =>{
        let product_list = this.props.ProductList;
        let search_value = e.target.value;
        var search_result = product_list.filter(product => product.name == search_value);
        this.setState({product_list:search_result});
    }

    searchByProductType = (e) =>{
        let product_list = this.props.ProductList;
        let search_value = e.target.value;
        var search_result = product_list.filter(product => product.product_type == search_value);
        this.setState({product_list:search_result});
    }    

    componentDidMount(){
        let product_list = this.props.ProductList
        this.setState({product_list})
      }
  render(){
    const indexOfLastProduct = this.state.pageNumber * 10;
    const indexOfFirstProduct = indexOfLastProduct - 10;
    const products = this.state.product_list.slice(indexOfFirstProduct, indexOfLastProduct);
    return(
        <Container fluid="md">
        <Row>
            <Col>
                <h2>Product Listing</h2>
            </Col>
            <Col className="text-right">
                <Link to="/">
                    <Button className="pull-right">
                        <span>Create Product</span>
                    </Button>
                </Link>
            </Col>
        </Row>
        
        <Row>
            <Search searchByName={this.searchByName} searchByProductType={this.searchByProductType} />
        </Row>

       <Row>

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Product Name</th>
                <th>Mfg Date</th>
                <th>Product Type</th>
                
                </tr>
            </thead>
            <tbody>
                    {
                        products.map( (product) => (
                            <Product product_details={product} key={product.name}/>
                        ))
                    }
            </tbody>
        </Table>
        
         {
             this.state.product_list.length > 10 &&
         (
            <Pagination
            productPerPage="10"
            totalProduct={this.state.product_list.length}
            paginate={this.paginate}
            />
         )
         }           

        </Row>
      </Container>
    )
  }
}

const mapStatetoprops = state => {
    return {
        ProductList: state
    }
}

export default connect(mapStatetoprops, null)(productListing);
