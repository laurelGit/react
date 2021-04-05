import { Button, withStyles } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    const StyledButton = withStyles({
        root: {
            // 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          backgroundColor: '#2e81f4',
          '&:hover': { backgroundColor: 'white', color: '#2e81f4' },
          width: '300px',
          color: '#eff2f5',
          fontWeight: '800',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);
    return ( 
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt=""/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <div>
                <StyledButton className="Button" type="submit" onClick={signIn} >Sign In</StyledButton>
            </div>
        </div>
     );
}
 
export default Login;