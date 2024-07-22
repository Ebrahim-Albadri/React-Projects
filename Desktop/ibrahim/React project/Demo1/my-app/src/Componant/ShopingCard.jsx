import React, { Component } from 'react';
import Product from './product';

class ShopingCard extends Component {


    render() { 
        return (
            <React.Fragment>
                <h4>shoping card</h4>
                <div onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</div>
               
                {this.props.Products.map(product => <Product 
                product={product}
                incrementCount={this.props.incrementCount}
                onDelete={this.props.onDelete}
                key={product.id}/>)}
            </React.Fragment>
        );
    }
}
 
export default ShopingCard;