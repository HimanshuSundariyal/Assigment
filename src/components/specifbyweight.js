import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

class  SpecificationByweight extends React.Component
{
    constructor(props)
    {
        super(props);
       this.state = {
        number: [""],
        } 
}

render() {
    return (
        <React.Fragment>
        {this.state.number.map((e, i)=> {
        return (
            <Row>
            <Col>
                <div className="form-group">
                    <label>Measurement Variable:</label>
                    <input type="text" className="form-control" id="mesurement_variable" /> 
                </div>
            </Col>
            <Col>
                <div className="form-group">
                    <label> Type:</label>
                    <select name="specification" className="form-control" id="specification">
                        <option value="Sqft">Sqft</option>
                        <option value="Meter">Meter</option>
                        <option value="Centimeter">Centimeter</option>
                    </select>  
                </div>
            </Col>
            <Col>
                <div className="form-group">
                    <label>Value:</label>
                    <input type="text" className="form-control" id="value" /> 
                </div>
            </Col>
            <Col className="text-right">
                <Button className="pull-right add_row"  onClick={()=>this.setState(prevState => ({number: [...prevState.number, ""]}))}>Add</Button> &nbsp;
            </Col>
            </Row>

)
})}

</React.Fragment>
)
}
}

  export default SpecificationByweight;