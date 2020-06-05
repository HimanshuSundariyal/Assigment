import React from 'react';
const Product =(props) =>{
    const { name, mfg_date, product_type } = props.product_details;
    return(
    <tr>
      <td>{name}</td>
      <td>{mfg_date}</td>
      <td>{product_type}</td>
	  
    </tr>
)

}

export default Product;