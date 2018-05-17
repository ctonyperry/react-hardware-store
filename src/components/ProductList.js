import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.productList;
        const deleteProductFromProductList = this.props.deleteProductFromProductList;
        const productComponents = productList.map((product, index) => {
            return <Product
                productName={product.productName}
                description={product.description}
                price={product.price}
                deleteProductFromProductList={deleteProductFromProductList}
                key={index}
                productId={index}
                userType={this.props.userType}
            />;
        });

        return (
            <div>
                {productComponents}
            </div>
        );

    }
}

export default ProductList;