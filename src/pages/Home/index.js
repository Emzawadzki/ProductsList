import React from 'react';
import AddProduct from '../../components/AddProduct';
import Table from '../../components/Table';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'addProduct',
      categories: ['food', 'drinks'],
      items: [
        {
          "name": "abc",
          "photoUrl": "noURL",
          "cat": "food",
          "price": "1222.22",
          "descr": "ex description 1"
        },
        {
          "name": "xybbfdzgfsddfbxf",
          "photoUrl": "noURL",
          "cat": "food",
          "price": "0.555",
          "descr": "ex description 1"
        },
        {
          "name": "exmaple1",
          "photoUrl": "noURL",
          "cat": "food",
          "price": "2.50",
          "descr": "ex description 1"
        },
        {
          "name": "exmaple2",
          "photoUrl": "noURL",
          "cat": "food",
          "price": "2.80",
          "descr": "ex description 2"
        }
      ]
    }
  }

  /**
   * Handle TAB changes
   */
  handleAddProductChange = () => {
    this.setState({
      tab: 'addProduct'
    })
  }

  handleTableChange = () => {
    this.setState({
      tab: 'table'
    })
  }

  /**
   * Handle receiving new product from child component
   */
  handleNewProduct = (product) => {
    this.setState({
      items: this.state.items.concat([product])
    })
  }
  
  render () {
    let tab;
    if(this.state.tab === 'addProduct') {
      tab = <AddProduct 
        categories={this.state.categories}
        onNewProductAdd={this.handleNewProduct}
      />
    } else if(this.state.tab === 'table') {
      tab = <Table 
        items={this.state.items}
        categories={this.state.categories}
      />
    }

    return(
      <div>
        <button onClick={this.handleAddProductChange}>AddProduct</button>
        <button onClick={this.handleTableChange}>Table</button>
        {tab}
      </div>
    )
  }
}