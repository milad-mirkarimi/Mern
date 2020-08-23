import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile'

const Dashboard = (props) => {
    useEffect(() => {
        props.getCurrentProfile()
    }, []);
    return props.profile.loading && props.profile.profile === null ? <div></div> : <Fragment>
        <h1>Welcome {props.profile.profile.user && props.profile.profile.user.name}</h1>
    </Fragment>
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
