import React, { Component } from 'react'
import {Consumer} from '../../context'
import axios from 'axios'
//import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'
class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
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
        const newContact = {
            name,
            email,
            phone,
        }
        const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContact);
        dispatch({
            type: 'ADD_CONTACT',
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
                            <div className = "card-header display-4"><span className = "text-danger">Add</span> Contact</div>
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
                                        className="btn btn-primary">Add Contact
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

export default AddContact;
