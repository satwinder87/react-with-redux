import classes from './Auth.module.css';
import {useRef} from "react";
import {useDispatch, useSelector} from 'react-redux';

import {authActions} from "../store/auth";

const isEmpty = value => value.trim().length === 0;

const Auth = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const enteredEmailIsValid = !isEmpty(email);
    const enteredPasswordIsValid = !isEmpty(password);

    const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

    if(!formIsValid){
      return;
    }
    console.log(email + ',' + password);
    dispatch(authActions.login(undefined));
  };

  const formContent = <main className={classes.auth}>
    <section>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' ref={passwordInputRef}/>
        </div>
        <button>Login</button>
      </form>
    </section>
  </main>;

  return (
      <div>
        {!isAuthenticated && formContent}
      </div>
  );
};

export default Auth;
