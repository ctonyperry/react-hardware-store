import React, { Component } from 'react';
import AdminView from './AdminView'
import ShopView from './ShopView'

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      userType: 'customer',
      viewToPresentToUser: {},
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Itsa hammer',
          price: 12.3,
        },
        {
          productName: 'Nail',
          description: 'Itsa nail',
          price: 0.12,
        }
      ]
    };
  }

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({ editSaleItem });
  };

  addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList];
    productList.push(newProduct);
    this.setState({ productList });
  };

  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value;
    this.setState({ itemCurrentlyOnSale });
  };

  deleteProductFromProductList = (index) => {
    const productList = [...this.state.productList];
    productList.splice(index, 1)
    this.setState({ productList })
  }

  setUserType = (event) => {
    const userType = event.target.value
    this.setState({ userType })

  }

  render() {
    //0 - Admin, 1 - customer
    const isAdmin = 'admin'
    const isCustomer = 'customer'

    switch (this.state.userType) {
      case 'admin':
        this.state.viewToPresentToUser = (
          <AdminView
            productList={this.state.productList}
            addNewProductToProductList={this.addNewProductToProductList}
            deleteProductFromProductList={this.deleteProductFromProductList}
            userType={isAdmin}
          />
        )
        break;

      default:
        this.state.viewToPresentToUser = (
          <ShopView
            productList={this.state.productList}
            userType={isCustomer}
          />)

        break;
    }

    return (
      <div>

        <h1>My Hardware Store</h1>

        <button value="customer" onClick={this.setUserType}>customer</button>
        <button value="admin" onClick={this.setUserType}>admin</button>

        <div><button onClick={this.deleteProductFromProductList} />
          <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>
              {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
            </button>
          </span>

          {
            this.state.editSaleItem ?
              <div>
                <input
                  onChange={this.handleItemCurrentlyOnSaleChange}
                  value={this.state.itemCurrentlyOnSale}
                  type="text"
                />
              </div>
              : null
          }

          {this.state.viewToPresentToUser}
        </div>


      </div>
    );
  }
}

export default HomePage;
