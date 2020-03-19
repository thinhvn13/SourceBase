import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CardLoginPresentation } from './../../components/CardLogin/index';
import { CardRegisterPresentation } from './../../components/CardRegister/index';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: '100%',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    Btn: {
        width: "50%",
        fontSize: "50px",
        background: 'linear-gradient(#FE6B8B 10%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 5px 4px 3px rgba(255, 105, 135, .3)',
        color: "black"
    },
    header: {

    },
    body: {
        width: "100%",
        height: "80%",
        position: "relative",
        marginTop: "0px"
    }
});
const HomePage = () => {
    const classes = useStyles();

    return (
        <>
            <div>
                HOME
                <Link to='/login'> Login </Link>
            </div>
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        authenticated: state.Authenticate.authenticated
    }
}


const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault();
        let phone = e.target[`username`].value;
        let password = e.target[`password`].value;
        dispatch(AuthenticateActions.requestAuthenticateUser(phone, password));
    }
});
export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);