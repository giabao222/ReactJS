import React, { Component } from 'react';
import axios from 'axios';
export default class Create extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);

        this.state = {
            name: '',
            mail: '',
            phone: '',
            address: ''
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeMail(e) {
        this.setState({
            mail: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            mail: this.state.mail,
            phone: this.state.phone,
            address: this.state.address
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', obj)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            mail: '',
            phone: '',
            address: ''
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Name:  </label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Add Mail : </label>
                        <input type="text" className="form-control" value={this.state.mail} onChange={this.onChangeMail} />
                    </div>
                    <div className="form-group">
                        <label>Add Phone: </label>
                        <input type="text" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <div className="form-group">
                        <label>Add Address: </label>
                        <input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}