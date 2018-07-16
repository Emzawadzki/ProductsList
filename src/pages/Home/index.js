import React from 'react';
import AddProduct from '../../components/AddProduct';
import Table from '../../components/Table';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'addProduct',
      categories: ['baking', 'drinks', 'vegetables', 'fruit'],
      items: [
        {
          "id": 0,
          "name": "Bread",
          "photoUrl": "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "cat": "baking",
          "price": "2.99",
          "descr": "Fresh and crispy."
        },
        {
          "id": 1,
          "name": "Bread roll",
          "photoUrl": "https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "cat": "baking",
          "price": "0.60",
          "descr": "Yummy!"
        },
        {
          "id": 4,
          "name": "Tomato",
          "photoUrl": "https://images.pexels.com/photos/5617/red-tomato-vegetable.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "cat": "vegetables",
          "price": "1.90",
          "descr": "Red and full of vitamins!"
        },
        {
          "id": 10,
          "name": "Apple",
          "photoUrl": "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "cat": "fruit",
          "price": "2.80",
          "descr": "An apple. Juicy!"
        },
        {
          "id": 11,
          "name": "Milk",
          "photoUrl": "https://images.pexels.com/photos/533307/pexels-photo-533307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "cat": "drinks",
          "price": "3.40",
          "descr": "The cow gave its best, that's for sure!"
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
   * Handle products changes
   */
  handleNewProduct = product => {
    this.setState({
      items: [...this.state.items, product]
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
      <div className="home">
        <button onClick={this.handleAddProductChange}  className="home__tab-button">AddProduct</button>
        <button onClick={this.handleTableChange} className="home__tab-button">Table</button>
        {tab}
      </div>
    )
  }
}