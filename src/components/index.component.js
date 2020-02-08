// index.component.js
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {

                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        //  if (this.props.users instanceof Array) {
        return this.state.users.map(function (object, i) {
            console.log(object)
            return <TableRow obj={object} key={i} />
        }
        );
        //  }
    }

    render() {
        return (
            <div>
                <h3 align="center">User List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
