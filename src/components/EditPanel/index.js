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
  }

  /**
   * Handle cancel
   */
  handleCancel = e => {
    this.props.onCancelSubmit();
  }

  render () {
    let categories = this.props.categories.map((el, i) => <option key={i} value={el}>{el}</option>);
    return(
      <form onSubmit={this.handleSubmit} className="edit-product">
        <label className="edit-product__label" htmlFor="name">Name:</label>
        <input className="edit-product__input" type="text" name="name" value={this.state.nextName} onChange={this.handleNameChange}/>
        <label className="edit-product__label" htmlFor="photo">PhotoURL:</label>
        <input className="edit-product__input" type="text" name="photo" value={this.state.nextPhotoUrl} onChange={this.handlePhotoChange}/>
        <label className="edit-product__label" htmlFor="category">Category:</label>
        <select className="edit-product__input" name="Category" id="category" onChange={this.handleCatChange}>
            {categories}
        </select>
        <label className="edit-product__label" htmlFor="price">Price:</label>
        <input className="edit-product__input" type="text" name="price" value={this.state.nextPrice} onChange={this.handlePriceChange}/>
        <label className="edit-product__label" htmlFor="description">Description:</label>
        <textarea className="edit-product__input" name="description" id="description" cols="30" rows="10" value={this.state.nextDescr} onChange={this.handleDescrChange}/>
        <button className="edit-product__button" type="submit">SAVE</button>
        <button className="edit-product__button" type="button" onClick={this.handleCancel}>CANCEL</button>
      </form>
    )
  }
}