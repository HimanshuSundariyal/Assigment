import React from 'react';
import { Container, Row, Button, Col,Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import SpecificationbyLength from './specifbylength';
import Specificationbyweight  from './specifbyweight';


class createProduct extends React.Component{
  constructor(props){
      super(props);
      this.state={
          productname: '',
          category:[],
          mfg_date:'',
          product_type:'',
          error: false,
          prevProducts:this.props.ProductList,
          specification:'',
          dublicate_product:false,
          success:false
      }
      this.inputProductnameRef= React.createRef();
  }


  checkProductName = (e) =>{
        var product_name = e.target.value;
        var prev_product_list = this.state.prevProducts;
        var search_result = prev_product_list.filter(product => product.name == product_name);
        if(search_result.length>0)
        {
            this.setState({dublicate_product:true})
            this.inputProductnameRef.current.value='';
            this.inputProductnameRef.current.focus();
        }
        else
        {
            this.setState({dublicate_product:false})
            this.setState({[e.target.name]: e.target.value})
        }     
  }
  handeChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
 
  handelDateChange = (e) =>
  {
    var d = new Date(e);
    var date = d.getDate();
    var month = d.getMonth() + 1; 
    var year = d.getFullYear();
    var mfg_date = date + "/" + month + "/" + year;
    this.setState({mfg_date});
  }
  
  handelCategory =(e) =>{
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
        value.push(options[i].value);
        }
    }
    this.setState({category:value}); 
    
    console.log(this.state);
  }

  handelSubmit = (e) =>{
    let  productname = this.state.productname;
    let  mfg_date = this.state.mfg_date; 
    let  product_type = this.state.product_type;     
    if(productname =='' || mfg_date=='' || product_type=='')
       {
        this.setState({error: true}); 
       } 
      else
      {
      let product_detais = [];
      product_detais["name"] = productname;
      product_detais["mfg_date"] = mfg_date;
      product_detais["product_type"] = product_type;
      this.props.addProduct(product_detais);
      this.setState({success: true}); 
      this.setState({error: false});
      e.target.reset();   
     }  
      e.preventDefault();
  }



  render(){
    return(
      <Container fluid="md">
        <Row>
        <Col>
            <h2>Create Product</h2>
        </Col>
        <Col className="text-right">
            <Link to="/productlist">
                <Button className="pull-right">
                    <span>Product Page</span>
                </Button>
            </Link>
        </Col>
        </Row>

        <Row>
            <Col className="create_product_form">
            {
                    this.state.error && (
                        <Alert variant="danger">Product Name, Mfg Date, Product Type is Required</Alert>  
                    )
            }

            <form onSubmit={this.handelSubmit}>
                <div className="form-group">
                    <label>Product Name:</label>
                    <input type="text" maxLength="100" name="productname" ref={this.inputProductnameRef} className="form-control" id="product_name" onBlur={this.checkProductName}/> 
                    {
                        this.state.dublicate_product && (
                            <Alert variant="warning">Product Name alredy there please choose another name</Alert>  
                        )
                    }
                </div>
                
                <div className="form-group">
                    <label>Category:</label>
                    <select name="category" className="form-control" id="category" onChange={this.handelCategory} multiple>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>     
                </div>

                <div className="form-group">
                    <label>Mfg Date:</label>
                    <DatePicker
                    value={this.state.mfg_date}
                    onChange={this.handelDateChange}
                    name="mfg_date"
                    
                    className="form-control"
            />
                </div>  

                <div className="form-group">
                    <label>Product Type:</label>
                    <select name="product_type" className="form-control" id="product_type" onChange={this.handeChange}>
                        <option value=""> --Select Product Type--   </option>
                        <option value="simple">Simple</option>
                        <option value="Virtual">Virtual</option>
                        <option value="Dynamic">Dynamic</option>
                    </select>   
                </div>

                <div className="form-group">
                    <label>Add Specification:</label>
                    <select name="specification" className="form-control" id="specification" onChange={this.handeChange}>
                        <option value=""> --Select Specification--   </option>
                        <option value="length">Lenght</option>
                        <option value="weight">Weight</option>
                    </select>     
                </div>
                {
                   this.state.specification === 'length' && 
                   <SpecificationbyLength /> 
                }
                {
                   this.state.specification === 'weight' && 
                   <Specificationbyweight /> 
                }                

                <Button variant="primary"  type="submit">Submit</Button>
                </form>
                {
                    this.state.success && (
                        <Alert variant="success">Product Created Succesfully</Alert>  
                    )
                }                  
            </Col>
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

const mapDistachToProps = (dispatch)  => {
    return {
      addProduct:(productDetais) => {dispatch({ type: 'CREATE_PRODUCT', payload:productDetais }) }
    }
  };

export default connect(mapStatetoprops, mapDistachToProps)(createProduct);
