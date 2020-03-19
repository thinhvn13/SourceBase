import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CardLoginPresentation } from './../../components/CardLogin/index';
import { CardRegisterPresentation } from './../../components/CardRegister/index';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: '100%',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
    Btn:{
        width:"50%",
        fontSize: "50px",
        background: 'linear-gradient(#FE6B8B 10%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 5px 4px 3px rgba(255, 105, 135, .3)',
        color:"black"
    },
    header:{
        
    },
    body:{
        width:"100%",
        height:"80%",
        position:"relative",
        marginTop:"0px"
    }
    });
const AuthenticatePage = () => {
    const classes = useStyles();
    const [isLogin, setLogin] = useState(true);
    const changeLogin = () => {
        setLogin(true);
    };
    const changeREGISTER = () => {
        setLogin(false);
    };
    
    return (
        <>  
        <div className={classes.root}>
            <div className={classes.header}>
                <Button className={classes.Btn}  
                    disabled={isLogin}
                    onClick={changeLogin}>
                        LOGIN</Button>
                <Button className={classes.Btn} 
                        disabled={!isLogin}
                        onClick={changeREGISTER} >REGISTER</Button>
            </div>
            <div className={classes.body}>
            {isLogin?<CardLoginPresentation />: <CardRegisterPresentation/>}
            </div>
            </div>
        </>
    )
}

export default AuthenticatePage;