import React, { Component } from 'react';
import ProductList from './ProductList'

class AdminView extends Component {

    render() {
        return (
            <div>
                <h1>Shop View</h1>
                <h2>Products</h2>

                <ProductList
                    productList={this.props.productList}
                    userType={this.props.userType}
                />
            </div>
        );
    }
}

export default AdminView;