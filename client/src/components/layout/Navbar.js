import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = (props) => {

    const authLinks = (
        <ul>
            <li>
                <a onClick={props.logout} to="/">
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className="hde-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLink = (
        <ul>
            <li><a to="/#!">Developers</a></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );

    return (

        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
            </h1>
            {!props.auth.loading && (<Fragment>{props.auth.isAuthenticated ? authLinks : guestLink}</Fragment>)}
        </nav>

    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(Navbar);
