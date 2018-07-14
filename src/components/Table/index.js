import React from 'react';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            sortBy: "name",
            sortAsc: true
        }
    }
    /**
     * sorting functions
     */
    handleSortByName = e => {
        this.setState({
            sortBy: "name",
            sortAsc: this.state.sortBy === "name" ? !this.state.sortAsc : true
        })
    }

    handleSortByPrice = e => {
        this.setState({
            sortBy: "price",
            sortAsc: this.state.sortBy === "price" ? !this.state.sortAsc : true
        })
    }

    render () {
        /**
         * Sort items
         */
        let tabContent = [].concat(this.state.items);
        if(this.state.sortBy === "price") {
            tabContent.sort((el1, el2) => {
                return this.state.sortAsc ? el1.price - el2.price : el2.price - el1.price
            })
        } else {
            tabContent = this.state.sortAsc ? tabContent.sort() : tabContent.sort().reverse();
        }
        /**
         * Generate items
         */
        tabContent = tabContent.map((el, i) => {
            return <tr key={i} className="products-table__row">
                <td className="products-table__cell">{el.name}</td>
                <td className="products-table__cell"><img src={el.photoUrl} alt={el.name + "-image"}/></td>
                <td className="products-table__cell">{el.cat}</td>
                <td className="products-table__cell">{'$' + el.price}</td>
                <td className="products-table__cell">{el.descr}</td>
            </tr>
        });

        /**
         * Output
         */
        return(
          <table className="products-table">
            <tbody className="products-table__body">
                <tr className="products-table__row">
                    <th className="products-table__head-cell" onClick={this.handleSortByName}>Name:</th>
                    <th className="products-table__head-cell" >Photo:</th>
                    <th className="products-table__head-cell">Category:</th>
                    <th className="products-table__head-cell" onClick={this.handleSortByPrice}>Price:</th>
                    <th className="products-table__head-cell">Description:</th>
                </tr>
                {tabContent}
            </tbody>
          </table>
        )
    }
}