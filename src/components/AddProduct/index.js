import React from 'react';

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            photoUrl: '',
            cat: this.props.categories[0],
            price: '',
            descr: '',
            prodAdded: false
        }
    }
    /**
     * Function handling submit
     */
    handleSubmit = (e) => {
        /**
         * Find first not-used ID
         */
        function getId (arr) {
            for(let i = 0; i <= arr.length + 1;  i++) {
                if(!arr.includes(i)) return i;
            }
        }
        e.preventDefault();
        /**
         * Generate new product
         */
        const newProduct = {
            "id": getId(this.props.productsIdsArr),
            "name": this.state.name,
            "photoUrl": this.state.photoUrl,
            "cat": this.state.cat,
            "price": this.state.price,
            "descr": this.state.descr
        };
        this.props.onNewProductAdd(newProduct);

        /**
         * Clear form, show SUCCESS message
         */
        this.setState({
            name: '',
            photoUrl: '',
            cat: this.props.categories[0],
            price: '',
            descr: '',
            prodAdded: true
        })
    }   

    /**
     * Functions handling inputs changes
     */
    handleNameChange = e => {
        const name = e.target.value;
        this.setState({name: name});
    }

    handlePhotoChange = e => {
        const url = e.target.value;
        this.setState({photoUrl: url});
    }

    handleCatChange = e => {
        const cat = e.target.value;
        this.setState({cat: cat});
    }

    handlePriceChange = e => {
        const price = e.target.value;
        this.setState({price: price});
    }

    handleDescrChange = e => {
        const descr = e.target.value;
        this.setState({descr: descr});
    }

    render () {
        let success = this.state.prodAdded ? 
        <span className="add-product__success">
            Product Added!
        </span> : null;
        let categories = this.props.categories.map((el, i) => <option key={i} value={el}>{el}</option>);
        return(
            <form onSubmit={this.handleSubmit} className="add-product flex--col">
                <label htmlFor="name" className="add-product__label">Name:</label>
                <input type="text" name="name" onChange={this.handleNameChange} className="add-product__input" value={this.state.name}/>
                <label htmlFor="photo" className="add-product__label">PhotoURL:</label>
                <input type="text" name="photo" onChange={this.handlePhotoChange} className="add-product__input"  value={this.state.photoUrl}/>
                <label htmlFor="category" className="add-product__label">Category:</label>
                <select name="Category" id="category" onChange={this.handleCatChange} className="add-product__input" value={this.state.cat}>
                    {categories}
                </select>
                <label htmlFor="price" className="add-product__label">Price:</label>
                <input type="text" name="price" onChange={this.handlePriceChange} className="add-product__input" value={this.state.price}/>
                <label htmlFor="description" className="add-product__label">Description:</label>
                <textarea name="description" id="description" cols="30" rows="10" onChange={this.handleDescrChange} className="add-product__input" value={this.state.descr}/>
                <button type="submit" className="add-product__button">ADD</button>
                {success}
            </form>
        )
    }
}