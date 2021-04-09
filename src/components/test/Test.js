import React, { Component } from 'react'
class Test extends Component {
    state = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id)
        .then(response => response.json())
        .then(data => {
            this.setState({
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone
            })
        })
    }
    render() {
        const {id,name,email,phone} = this.state;
        return (
            <div>
                <h1 className = "display-4"><span className = "text-danger">Test</span> Fetch Data From API</h1>
                <h1><span className = "text-danger">ID</span>: {id}</h1>
                <h1>Name: {name}</h1>
                <h2>Email: {email}</h2>
                <h3>Phone: {phone}</h3>
            </div>
        )
    }
}
export default Test;