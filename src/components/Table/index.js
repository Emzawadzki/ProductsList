import React from 'react';
import TableCatChooser from '../TableCatChooser';
import EditPanel from '../EditPanel';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            sortBy: "name",
            sortAsc: true,
            displCategories: this.props.categories,
            search: '',
            editPanelVisible: false,
            editElId: ''
        }
    }
    /**
     * remove element handler
     */
    handleDeleteButton = e => {
        return this.props.onDeleteProduct(e.target.parentElement.parentElement.dataset.id)
    }

    /**
     * Edit element handler
     */
    handleEditSubmit = item => {
        console.log('table - submit edit');
        this.props.onEditProduct(item);
        this.setState({
            editElId: '',
            editPanelVisible: false
        })
    }

    handleEditButton = e => {
        this.setState({
            editElId: e.target.parentElement.parentElement.dataset.id,
            editPanelVisible: true
        })
    }

    /**
     * sorting functions handlers
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

    handleSearchChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleCategoryChange = catArr => {
        this.setState({
            displCategories: catArr
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items
        })
    }

    render () {
        /**
         * Sort items
         */
        let tabContent = [...this.state.items];
        if(this.state.sortBy === "price") {
            tabContent.sort((el1, el2) => {
                return this.state.sortAsc ? el1.price - el2.price : el2.price - el1.price
            })
        } else if(this.state.sortBy === "name") {
            tabContent.sort((el1, el2) => {
                return (el1.name.toUpperCase() < el2.name.toUpperCase()) ? -1 : (el1.name.toUpperCase() > el2.name.toUpperCase()) ? 1 : 0;
            })
            tabContent = this.state.sortAsc ? tabContent : tabContent.reverse()
        }

        /**
         * Exclude with categories
         */
        tabContent = tabContent.filter(el => {
            return this.state.displCategories.indexOf(el.cat) !== -1
        })

        /**
         * Exclude with search
         */
        tabContent = tabContent.filter(el => {
            return el.name.indexOf(this.state.search) !== -1
        })

        /**
         * Generate items
         */
        tabContent = tabContent.map((el, i) => {
            return <tr key={i} data-id={el.id} className="products-table__row">
                <td className="products-table__cell">{el.name}</td>
                <td className="products-table__cell"><img src={el.photoUrl} alt={el.name + "-image"}/></td>
                <td className="products-table__cell">{el.cat}</td>
                <td className="products-table__cell">{'$' + el.price}</td>
                <td className="products-table__cell">{el.descr}</td>
                <td className="products-table__cell"><button onClick={e => this.handleDeleteButton(e)}>DELETE</button></td>
                <td className="products-table__cell"><button onClick={e => this.handleEditButton(e)}>EDIT</button></td>
            </tr>
        });

        let editItem = this.props.items.filter(el => el.id == this.state.editElId)[0];
        
        let editPanel;
        if(this.state.editPanelVisible) {
            editPanel = <EditPanel
                itemToEdit={editItem}
                onEditSubmit={this.handleEditSubmit}
                categories={this.props.categories}
            />
        }

        /**
         * Output
         */
        return(
            <div>
                <label htmlFor="search">Search:</label>
                <input type="text" name="search" onChange={e => this.handleSearchChange(e)}/>
                {editPanel}
                <table className="products-table">
                    <tbody className="products-table__body">
                        <tr className="products-table__row">
                            <th className="products-table__head-cell" onClick={this.handleSortByName}>Name:</th>
                            <th className="products-table__head-cell" >Photo:</th>
                            <th className="products-table__head-cell">Category:
                            <TableCatChooser
                                categories={this.props.categories}
                                displCategories={this.state.displCategories}
                                onCategoryChange={this.handleCategoryChange}
                            />
                            </th>
                            <th className="products-table__head-cell" onClick={this.handleSortByPrice}>Price:</th>
                            <th className="products-table__head-cell">Description:</th>
                        </tr>
                        {tabContent}
                    </tbody>
                </table>
            </div>
        )
    }
}