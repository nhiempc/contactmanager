import axios from 'axios';
import React, { Component } from 'react'
import {Consumer} from '../../context'
//import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'
class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value}); 
    onSubmit = async (dispatch,e) => {
        e.preventDefault();
        const {name,email,phone} = this.state;
        //Check valid input
        if(name === ''){
            this.setState({error: {name: 'Name is required'}})
            return
        }
        if(email === ''){
            this.setState({error: {email: 'Email is required'}})
            return
        }
        if(phone === ''){
            this.setState({error: {phone: 'Phone is required'}})
            return
        }
        const updateContact = {
            name,
            email,
            phone
        }
        const {id} = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact);
        dispatch({
            type: 'UPDATE_CONTACT',
            payload: res.data
        })
        //Clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {}
        })
        this.props.history.push('/')
    };
    render() {
        const {name, email, phone, error} = this.state;
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className = "card mb-3">
                            <div className = "card-header display-4"><span className = "text-danger">Edit</span> Contact</div>
                            <div className = "card-body">
                                <form onSubmit = {this.onSubmit.bind(this,dispatch)}>
                                    <TextInputGroup
                                        label = "Name"
                                        name = "name"
                                        placeholder = "Enter Name"
                                        value = {name}
                                        onChange = {this.onChange}
                                        error = {error.name}
                                    />
                                    <TextInputGroup
                                        label = "Email"
                                        name = "email"
                                        type = "email"
                                        placeholder = "Enter Email"
                                        value = {email}
                                        onChange = {this.onChange}
                                        error = {error.email}
                                    />
                                    <TextInputGroup
                                        label = "Phone"
                                        name = "phone"
                                        type = "phone"
                                        placeholder = "Enter Phone"
                                        value = {phone}
                                        onChange = {this.onChange}
                                        error = {error.phone}
                                    />
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary">Update Contact
                                    </button>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact;
