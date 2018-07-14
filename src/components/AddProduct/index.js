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
        let categories = this.props.categories.map((el, i) => <option key={i} value={el}>{el}</option>);
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={this.handleNameChange}/>
                <label htmlFor="photo">PhotoURL:</label>
                <input type="text" name="photo" onChange={this.handlePhotoChange}/>
                <label htmlFor="category">Category:</label>
                <select name="Category" id="category" onChange={this.handleCatChange}>
                    {categories}
                </select>
                <label htmlFor="price">Price:</label>
                <input type="text" name="price" onChange={this.handlePriceChange}/>
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" cols="30" rows="10" onChange={this.handleDescrChange}/>
                <button type="submit">ADD</button>
            </form>
        )
    }
}