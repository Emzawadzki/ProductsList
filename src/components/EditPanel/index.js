import React from 'react';

export default class EditPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextName: this.props.itemToEdit.name,
      nextPhotoUrl: this.props.itemToEdit.photoUrl,
      nextCat: this.props.itemToEdit.cat,
      nextPrice: this.props.itemToEdit.price,
      nextDescr: this.props.itemToEdit.descr,
    }
  }

  /**
   * Functions handling inputs changes
   */
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({nextName: name});
  }

  handlePhotoChange = e => {
    const url = e.target.value;
    this.setState({nextPhotoUrl: url});
  }

  handleCatChange = e => {
    const cat = e.target.value;
    this.setState({nextCat: cat});
  }

  handlePriceChange = e => {
    const price = e.target.value;
    this.setState({nextPrice: price});
  }

  handleDescrChange = e => {
    const descr = e.target.value;
    this.setState({nextDescr: descr});
  }

  /**
   * Handle submit
   */
  handleSubmit = e => {
    e.preventDefault();
    const editedItem = {
      "id": this.props.itemToEdit.id,
      "name": this.state.nextName,
      "photoUrl": this.state.nextPhotoUrl,
      "cat": this.state.nextCat,
      "price": this.state.nextPrice,
      "descr": this.state.nextDescr
    }
    this.props.onEditSubmit(editedItem);
    console.log('submit - edit panel');
    
  }

  render () {
    console.log(this.props.itemToEdit);
    
    let categories = this.props.categories.map((el, i) => <option key={i} value={el}>{el}</option>);
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={this.state.nextName} onChange={this.handleNameChange}/>
        <label htmlFor="photo">PhotoURL:</label>
        <input type="text" name="photo" value={this.state.nextPhotoUrl} onChange={this.handlePhotoChange}/>
        <label htmlFor="category">Category:</label>
        <select name="Category" id="category" onChange={this.handleCatChange}>
            {categories}
        </select>
        <label htmlFor="price">Price:</label>
        <input type="text" name="price" value={this.state.nextPrice} onChange={this.handlePriceChange}/>
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" cols="30" rows="10" value={this.state.nextDescr} onChange={this.handleDescrChange}/>
        <button type="submit">SAVE</button>
        <button type="button">CANCEL</button>
      </form>
    )
  }
}