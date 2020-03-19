import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import * as AuthenticateTypes from './../../../store/action/Authenticate/AuthenticateType';
import * as AuthenticateActions from './../../../store/action/Authenticate/AuthenticateActions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        width: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'hidden',

        '& .MuiFormControlLabel-label': {
            fontSize: '33px',
        },
        '& .MuiIconButton-label': {
            flex: '0 0 auto',
            color: 'rgba(0, 0, 0, 0.54)',
            padding: '12px',
            overflow: 'visible',
            fontSize: '40px',
            textAlign: 'center',
            transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderadius: '50%'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '40px'
        }
    },
    form: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        display: 'grid',
        marginBottom: '25%',
        width: '70%',
        height: '50%',
    },
    titleHeader: {
        marginTop: "10%",
        marginBottom: "10%",
        textTransform: 'uppercase',
        fontSize: '50px',
        fontWeight: '500',
    },
    titleFooter: {
        bottom: '5%',
        left: '20%',
        right: '20%',
        position: 'absolute',
        fontSize: '38px'
    },
    bottonLogin: {
        marginRight: '25%',
        marginLeft: '25%'
    },
    elementBtn: {
        fontSize: '38px',
        background: '#FF8E53'
    },
    elementLabel: {
        fontSize: '38px'
    },
    elementLabelRM: {
        fontSize: '50px',
        width: '100%',
        height: "100px"
    },
    errorMsg: {
        fontSize: '30px',
        color: 'Red'

    },
    elementInput: {
        fontSize: '50px'
    },

});;

const CardLogin = ({ authenticateUser, authenticated }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isremember, setIsRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isValidate, setIsValidate] = useState(false);
    const classes = useStyles();

    const changeIsRemember = isremember => {
        setIsRemember(isremember.target.checked);
    };
    const changetShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const changeUserName = username => {
        setUserName(username.target.value);
    };
    const changePassword = password => {
        setPassword(password.target.value);
    };

    const checkUsername = (username, isValidate) => {
        if (!isValidate)
            return false
        if ((/^\d+$/.test(username)) && username.length >= 10)
            return false
        return true
    }
    const checkPassword = (password, isValidate) => {
        if (!isValidate)
            return false
        if (password.match(/[a-z]/g)
            && password.match(/[A-Z]/g)
            && password.match(/[0-9]/g)
            && password.match(/[^a-zA-Z\d]/g)
            && password.length >= 8)
            return false
        return true
    }
    const turnOnCheckValidation = () => {
        if (!isValidate)
            setIsValidate(true)

    }
    const submitForm = (e, username, password, isValidate) => {
        e.preventDefault();
        if ((isValidate)
            && (!checkUsername(username, isValidate))
            && (!checkPassword(password, isValidate)))
            authenticateUser(e);
    }
    useEffect(() => {
        return (() => {

        })
    }, [isValidate]);

    return (
        <div className={classes.root}>
            <label className={classes.titleHeader} >LOGIN</label>
            <FormHelperText className={classes.errorMsg} id="standard-weight-helper-text">{authenticated === AuthenticateTypes.NOT_AUTHENTICATED ? isValidate? 'Login incorrect.':null : null}</FormHelperText>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={e=>submitForm(e, username, password, isValidate)}>
                <FormControl>
                    <InputLabel htmlFor="account-input" className={classes.elementLabel}>Phone</InputLabel>
                    <Input className={classes.elementInput}
                        id="account-input"
                        error={checkUsername(username, isValidate)}
                        value={username}
                        placeholder="Please type your phone number"
                        onChange={changeUserName}
                        aria-describedby="my-helper-text"
                        name="username"
                    />
                    <FormHelperText className={classes.errorMsg} id="standard-weight-helper-text">{checkUsername(username, isValidate) ? 'please only type your phone number' : null}</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password-input" className={classes.elementLabel} >Password</InputLabel>
                    <Input
                        className={classes.elementInput}
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={changePassword}
                        error={checkPassword(password, isValidate) ? true : false}
                        name="password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={changetShowPassword}
                                    onMouseDown={changetShowPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText className={classes.errorMsg} id="my-helper-text">{checkPassword(password, isValidate) ?
                        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" : null}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        className={classes.elementLabelRM}
                        variant="contained"
                        control={
                            <Checkbox checked={isremember} onChange={changeIsRemember} />
                        }
                        label="Remember Me"
                    />
                </FormControl>
                <FormControl className={classes.bottonLogin}>
                    {console.log(authenticated)}
                    <Button
                        className={classes.elementBtn}
                        variant="contained"
                        size='medium'
                        onClick={turnOnCheckValidation}
                        disabled={authenticated === AuthenticateTypes.AUTHENTICATING}
                        type='submit'
                    >
                        Login
                    </Button>

                </FormControl>
            </form>
            <label className={classes.titleFooter}> This is footer title !!! <a href='#'>Home</a> </label>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
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

export const ConnectedCardLogin = connect(mapStateToProps, mapDispatchToProps)(CardLogin);