import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.mail}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-primary">Detele</button>
                </td>
            </tr>
        );
    }
}
export default TableRow;