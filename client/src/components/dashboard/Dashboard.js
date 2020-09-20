import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';

const Dashboard = (props) => {
    useEffect(() => {
        props.getCurrentProfile()
    }, []);
    return props.profile.loading && props.profile.profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome {props.auth.user && props.auth.user.name}
        </p>
        {props.profile !== null ? (
            <Fragment>
                <DashboardActions />
            </Fragment>) : (
                <Fragment>
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
                </Fragment>)}
    </Fragment>;
}

Dashboard.prototypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)