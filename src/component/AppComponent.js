import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import DashBoardPage from './DashboardPage';
import { Route, Switch } from 'react-router-dom';

const styles = {
    root: {},
    mainWrapper: {
        width: '100%',
        display: 'block',
    },
};

class App extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailOrUsername: '',
        password: '',
        confirmPassword: '',
        isPasswordMatched: false,
        isSignUpAttempt: false
    }

    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }

    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    handleChangeUserName = (e) => {
        this.setState({
            emailOrUsername: e.target.value
        });
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleChangeConfirmPassword = (e) => {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    onSignUp = () => {
        const { firstName, lastName, emailOrUsername, password, confirmPassword } = this.state;
        this.setState({isSignUpAttempt: true});

        // check all fields are valid
        if ((!firstName.trim()) || (!lastName.trim()) || (!emailOrUsername.trim()) || (!password.trim())
            || (!confirmPassword.trim())
        ) {
            return;
        }
        // check all fields are valid

        // check if password and confirmPassword are match
        if (password === confirmPassword) {
            this.setState({ 
                isPasswordMatched: true,
                isSignUpAttempt: false
            });
            window.localStorage.setItem('username', emailOrUsername);
            window.localStorage.setItem('password', password);
            window.localStorage.setItem('firstName', firstName);
            window.localStorage.setItem('signUpKey', 'signUpDone');
            window.location.href = "/signin";
            return;
        } else {
            alert('Password Not Matched!!');
            return;
        }
        // check if password and confirmPassword are match
    }

    SignUpPage= () => {
        const { 
            firstName, 
            lastName, 
            emailOrUsername, 
            password, 
            confirmPassword, 
            isSignUpAttempt,
            isPasswordMatched
        } = this.state;

        return (
            <SignUpPage
                firstName={firstName}
                lastName={lastName}
                emailOrUsername={emailOrUsername}
                password={password}
                confirmPassword={confirmPassword}
                isSignUpAttempt={isSignUpAttempt}
                isPasswordMatched={isPasswordMatched}
                handleChangeFirstName={this.handleChangeFirstName}
                handleChangeLastName={this.handleChangeLastName}
                handleChangeUserName={this.handleChangeUserName}
                handleChangePassword={this.handleChangePassword}
                handleChangeConfirmPassword={this.handleChangeConfirmPassword}
                onSignUp={this.onSignUp}
            />
        );
    }

    handleSignIn = () => {
        window.localStorage.setItem('signInKey', 'signInKey');
        window.location.href = "/dashboard";
    }

    SignInPage = () => {
        return (
            <SignInPage
                handleSignIn={this.handleSignIn}
            />
        );
    }

    DashBoard = () => {
        return (
            <DashBoardPage />
        );
    }

    render() {
        const { classes } = this.props;
        const getSignUpToken = localStorage.getItem('signUpKey');
        const getSignInToken = localStorage.getItem('signInKey');
        let content;
        if (!getSignUpToken) {
            content = <Route path="/" exact={true} component={this.SignUpPage} />;
        } else if (!getSignInToken) {
            content = <Route path="/signin" exact={true} component={this.SignInPage} />;
        } else if (getSignInToken) {
            content = <Route path="/dashboard" exact={true} component={this.DashBoard} />;
        }

        return (
            <div className={classes.mainWrapper}>
                <Switch>
                    {content}
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(App);