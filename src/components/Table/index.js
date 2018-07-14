import React from 'react';

export default class Table extends React.Component {
    render () {
        let tabContent = this.props.items.map((el, i) => {
            return <tr key={i}>
                <td>{el.name}</td>
                <td><img src={el.photoUrl} alt={el.name + "-image"}/></td>
                <td>{el.cat}</td>
                <td>{el.price}</td>
                <td>{el.descr}</td>
            </tr>
        })

        return(
          <table>
            <thead>
            </thead>
            <tbody>
                {tabContent}
            </tbody>
          </table>
        )
    }
}