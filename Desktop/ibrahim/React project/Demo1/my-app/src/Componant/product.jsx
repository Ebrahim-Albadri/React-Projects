import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Product extends Component {
    // state = { 
    //     id:this.props.product.id,
    //     name:this.props.product.name,
    //     count:this.props.product.count,
    //  } 

       getClasses() {
        return this.props.product.count < 3 ? "btn btn-primary m-2" : "btn btn-warning m-2" ;
      }
    

    render() { 
        return (
        <div className='row'>   
            <div className="col-1">{this.props.product.name}</div>
            <div className="col"><span className={this.getClasses()}>{this.props.product.count}</span>
            <button onClick={() => this.props.incrementCount(this.props.product)} className='btn btn-primary btn-sm'>+</button>
            <FontAwesomeIcon  onClick={()=>this.props.onDelete(this.props.product)} className='fs-4 m-1' icon={faTrash} />
            </div>
        </div>);
    }
}
 
export default Product;