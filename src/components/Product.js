import React, { Component } from 'react';

class Product extends Component {

    constructor() {
        super()
        this.state = {
            viewToPresentToUser: []
        }
    }
    
    deleteProduct = (event) => {
        this.props.deleteProductFromProductList(event.target.value)
    };

    render() {
        switch (this.props.userType) {
            case "admin":
                this.state.viewToPresentToUser = (<button value={this.props.productId} onClick={this.deleteProduct}>Delete</button>)
                break;

            default:
            this.state.viewToPresentToUser = (<button value={this.props.productId}>Add to Cart</button>)
                break;
        }

        return (
            <div>
                <span><h3>{this.props.productName}</h3></span>
                <div>{this.props.description}</div>
                <div>{this.props.price}</div>
                <div>{this.state.viewToPresentToUser}</div>
            </div>
        );
    }
}

export default Product;