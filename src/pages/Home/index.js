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
          "id": 0,
          "name": "abc",
          "photoUrl": "noURL",
          "cat": "food",
          "price": "1222.22",
          "descr": "ex description 1"
        },
        {
          "id": 1,
          "name": "xybbfdzgfsddfbxf",
          "photoUrl": "noURL",
          "cat": "food",
          "price": "0.555",
          "descr": "ex description 1"
        },
        {
          "id": 4,
          "name": "exmaple1",
          "photoUrl": "noURL",
          "cat": "food",
          "price": "2.50",
          "descr": "ex description 1"
        },
        {
          "id": 10,
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
   * Handle products changes TODO: change newProdHandler to [...]
   */
  handleNewProduct = product => {
    this.setState({
      items: this.state.items.concat([product])
    })
  }

  handleDeleteProduct = id => {
    this.setState({
      items: this.state.items.filter(el => el.id !== Number(id))
    })
  }

  handleEditProduct = item => {
    const otherItems = this.state.items.filter(el => el.id !== item.id);
    const newItems = [...otherItems, item];
    this.setState({
      items: newItems
    })
    console.log(newItems);
    
  }
  
  render () {
    let tab;
    if(this.state.tab === 'addProduct') {
      tab = <AddProduct 
        categories={this.state.categories}
        onNewProductAdd={this.handleNewProduct}
        productsIdsArr={this.state.items.map(el => el.id)}
      />
    } else if(this.state.tab === 'table') {
      tab = <Table 
        items={this.state.items}
        categories={this.state.categories}
        onDeleteProduct={this.handleDeleteProduct}
        onEditProduct={this.handleEditProduct}
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