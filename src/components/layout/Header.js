import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
class Header extends Component {
    PropTypes = {
        branding: PropTypes.string.isRequired
    };
    render() {
        const {branding} = this.props;
        return(
            <div>
                <nav className = "navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className = "container">
                        <Link className = "navbar-brand" to="/">
                            {branding}
                        </Link>
                        <ul className = "navbar-nav">
                            <li className = "nav-item">
                                <Link className = "nav-link" to="/"><i className = "fas fa-home pr-2"/>Home</Link>
                            </li>
                            <li className = "nav-item">
                                <Link className = "nav-link" to="/contact/add"><i className = "fas fa-plus pr-2"/>Add Contact</Link>
                            </li>
                            <li className = "nav-item">
                                <Link className = "nav-link" to="/about"><i className = "fas fa-question pr-2"/>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;