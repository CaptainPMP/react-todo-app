import React, { Component } from 'react';
class AppItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        var items = this.props.items;
        var search = this.props.search;

        if(search.length > 0) {
            items = items.filter((item) => {
                return item.toLowerCase().match(search);
            });
        }

        var tableHeader = 
        <tr className="tableHead">
            <th className="taskNumber">#</th>
            <th className="taskItem">Task</th>
            <th>(X)</th>
        </tr>

        if (items.length === 0) {
            tableHeader = '';
        }

        var list = items.map((item, index) => {
            return (
                <tr>
                    <td className="taskNumber">Task {index+1}</td>
                    <td className="taskItem" key={index}>{item}</td>
                    <td>
                        <button className="remove" onClick={this.props.deleteItem.bind(this,index)}>X</button>
                    </td>
                </tr>
            )
        });

        return ( 
            <table className="taskTable">
                {tableHeader}
                {list}
            </table>
         );
    }
}
 
export default AppItems;