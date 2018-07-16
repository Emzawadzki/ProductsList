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
        return <label key={i} className="cat-chooser__label">
          <input type="checkbox" name={el} onChange={e => this.handleCheckboxCheck(e)}checked={true} className="cat-chooser__input"/>
          {el}
        </label>
      }
      return <label key={i} className="cat-chooser__label">
        <input type="checkbox" name={el} onChange={e => this.handleCheckboxCheck(e)} checked={false} className="cat-chooser__input"/>
        {el}
      </label>
    })
    
    return(
      <div className="cat-chooser">
        {categories}
      </div>
    )
  }
}