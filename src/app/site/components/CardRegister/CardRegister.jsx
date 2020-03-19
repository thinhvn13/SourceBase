import React, { useState, useEffect } from 'react';
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
import { connect } from 'react-redux';
import * as AuthenticateTypes from './../../../store/action/Authenticate/AuthenticateType';
import * as AuthenticateActions from './../../../store/action/Authenticate/AuthenticateActions';

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
        position: 'relative',
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
    },
    errorMsg: {
        fontSize: '40px',
        color: 'Red'

    },
    elementInput: {
        fontSize: '50px'
    },

});;

const CardRegister = ({ registerUser, authenticated, msg }) => {
    const [username, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [showRePassword, setShowRePassword] = useState(false);
    const [isagree, setIsAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isValidate, setIsValidate] = useState(false);
    const classes = useStyles();

    const changeIsAgree = isagree => {
        setIsAgree(isagree.target.checked);
    };
    const changeShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const changeShowRePassword = () => {
        setShowRePassword(!showRePassword);
    };


    const changeFirstName = firstName => {
        setFirstName(firstName.target.value);
    };
    const changeLastName = lastName => {
        setLastName(lastName.target.value);
    };
    const changeUserName = username => {
        setUserName(username.target.value);
    };
    const changePhone = username => {
        setPhone(username.target.value);
    };
    const changePassword = password => {
        setPassword(password.target.value);
    };
    const changeRePassword = rePassword => {
        setRePassword(rePassword.target.value);
    };

    const checkFied = (temp, isValidate) => {
        var letters = /^[A-Za-z]+$/;
        if (!isValidate)
            return false
        if (temp.match(letters) && password.length >= 5)
            return false;
        return true
    }

    const checkPhone = (phone, isValidate) => {
        if (!isValidate)
            return false
        if (/^\d+$/.test(phone))
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
    const checkMatchPassword = (password, rePassword, isValidate) => {
        if (!isValidate)
            return false
        if (password == rePassword)
            return false
        return true
    }
    const turnOnCheckValidation = () => {
        if (!isValidate)
            setIsValidate(true)

    }

    const checkIsAgree = (isagree) => {
        if (isagree)
            return false
        return true
    }

    const submitForm = (e, firstName, lastName, username, phone, password, rePassword, isValidate) => {
        e.preventDefault();
        if ((isValidate)
            && (!checkFied(firstName, isValidate))
            && (!checkFied(lastName, isValidate))
            && (!checkFied(username, isValidate))
            && (!checkPhone(phone, isValidate))
            && (!checkPassword(password, isValidate))
            && (!checkMatchPassword(password, rePassword, isValidate))
        )
            registerUser(e);
    }

    useEffect(() => {
        return (() => {

        })
    }, [isValidate]);

    return (
        <div className={classes.root}>
            <label className={classes.titleHeader} >REGISTER</label>
            <FormHelperText className={classes.errorMsg} id="standard-weight-helper-text">{authenticated === AuthenticateTypes.REGISTER_FAIL ? isValidate ? msg : null : null}</FormHelperText>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={e => submitForm(e, firstName, lastName, username, phone, password, rePassword, isValidate)}>
                <FormControl>
                    <InputLabel htmlFor="account-input" className={classes.elementLabel}>First Name</InputLabel>
                    <Input className={classes.elementInput}
                        name='firstName'
                        id="account-input-01"
                        error={checkFied(firstName, isValidate)}
                        value={firstName}
                        placeholder="Please type first name"
                        onChange={changeFirstName}
                        aria-describedby="my-helper-text"
                    />
                    <FormHelperText className={classes.errorMsg} id="standard-weight-helper-text">{checkFied(firstName, isValidate) ? 'Fist Name invalid' : null}</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="account-input" className={classes.elementLabel}>Last Name</InputLabel>
                    <Input className={classes.elementInput}
                        name='lastName'
                        id="account-input-02"
                        error={checkFied(lastName, isValidate)}
                        value={lastName}
                        placeholder="Please type last name"
                        onChange={changeLastName}
                        aria-describedby="my-helper-text"
                    />
                    <FormHelperText className={classes.errorMsg} id="standard-weight-helper-text">{checkFied(lastName, isValidate) ? 'Last Name invalid' : null}</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="account-input" className={classes.elementLabel}>User Name</InputLabel>
                    <Input className={classes.elementInput}
                        name='username'
                        id="account-input-03"
                        error={checkFied(username, isValidate)}
                        value={username}
                        placeholder="Please type username"
                        onChange={changeUserName}
                        aria-describedby="my-helper-text"
                    />
                    <FormHelperText className={classes.errorMsg} id="standard-weight-helper-text">{checkFied(username, isValidate) ? 'User Name invalid' : null}</FormHelperText>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="account-input" className={classes.elementLabel}>Phone</InputLabel>
                    <Input className={classes.elementInput}
                        name='phone'
                        id="account-input-04"
                        error={checkPhone(phone, isValidate)}
                        value={phone}
                        placeholder="Please type your phone number"
                        onChange={changePhone}
                        aria-describedby="my-helper-text"
                    />
                    <FormHelperText className={classes.errorMsg} id="standard-weight-helper-text">{checkPhone(phone, isValidate) ? 'please only type your phone number' : null}</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password-input" className={classes.elementLabel} >Password</InputLabel>
                    <Input
                        className={classes.elementInput}
                        name='password'
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={changePassword}
                        error={checkPassword(password, isValidate) ? true : false}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={changeShowPassword}
                                    onMouseDown={changeShowPassword}
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
                    <InputLabel htmlFor="password-input" className={classes.elementLabel} >Re-Password</InputLabel>
                    <Input
                        className={classes.elementInput}
                        id="standard-adornment-repassword"
                        type={showRePassword ? 'text' : 'password'}
                        value={rePassword}
                        onChange={changeRePassword}
                        error={checkMatchPassword(password, rePassword, isValidate) ? true : false}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={changeShowRePassword}
                                    onMouseDown={changeShowRePassword}
                                >
                                    {showRePassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText className={classes.errorMsg} id="my-helper-text">{checkMatchPassword(password, rePassword, isValidate) ?
                        "Password dont mtach" : null}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        variant="contained"
                        control={
                            <Checkbox checked={isagree} onChange={changeIsAgree} name="is_agree" />
                        }
                        label={<p>I agree to the account <a href='#' >Terms</a> \& <a href='#'> Privacy. </a></p>}
                    />
                </FormControl>
                <FormControl className={classes.bottonLogin}>
                    <Button
                        disabled={(checkIsAgree(isagree) || (authenticated === AuthenticateTypes.REGISTERING)) ? true : false}
                        className={classes.elementBtn}
                        variant="contained"
                        size='medium'
                        onClick={turnOnCheckValidation}
                        type='submit'
                    >
                        Register
                    </Button>
                </FormControl>
            </form>
            <label className={classes.titleFooter}> This is footer title !!! <Link to='/'> Home </Link> </label>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        authenticated: state.Authenticate.authenticated,
        msg: state.Authenticate.msg
    }
}


const mapDispatchToProps = (dispatch) => ({
    registerUser(e) {
        e.preventDefault();
        let firstName = e.target[`firstName`].value;
        let lastName = e.target[`lastName`].value;
        let username = e.target[`username`].value;
        let phone = e.target[`phone`].value;
        let password = e.target[`password`].value;
        let is_agree = e.target[`is_agree`].checked;
        dispatch(AuthenticateActions.requestRegisterUser(firstName, lastName, username, phone, password, is_agree));
    }
});

export const ConnectedCardRegister = connect(mapStateToProps, mapDispatchToProps)(CardRegister);
