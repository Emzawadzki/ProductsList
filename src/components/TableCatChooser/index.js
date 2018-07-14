import React from 'react';

export default class TableCatChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displCategories: [...this.props.displCategories]
    }
  }

  /**
   * Check handler
   */
  handleCheckboxCheck = e => {
    // e.preventDefault();
    let catArr = [...this.state.displCategories];
    console.log(catArr);
    
    if(catArr.indexOf(e.target.name) !== -1) {
      this.setState({
        displCategories: catArr.splice(catArr.indexOf(e.target.name), 1)
      })
    } else {
      this.setState({
        displCategories: catArr.push(e.target.name)
      })
    }
    console.log(catArr);
    this.props.onCategoryChange(catArr);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      displCategories: nextProps.displCategories
    })
  }

  render () {
    /**
     * Conditional checkboxes rendering
     */
    let categories = [...this.props.categories].map((el, i) => {
      if(this.state.displCategories.includes(el)) {
        return <label key={i}>
          <input type="checkbox" name={el} onChange={e => this.handleCheckboxCheck(e)}checked={true}/>
          {el}
        </label>
      }
      return <label key={i}>
        <input type="checkbox" name={el} onChange={e => this.handleCheckboxCheck(e)} checked={false}/>
        {el}
      </label>
    })
    
    return(
      <div>
        {categories}
      </div>
    )
  }
}