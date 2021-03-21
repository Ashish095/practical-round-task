import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = {
    root: {
        justifyContent: 'center',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    titleHeader: {
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorPrimary: {
        color: '#3f51b5'
    },
    colorSecondary: {
        color: '#757575'
    },
    formSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    margin: {
        margin: 'auto',
        width: '300px',
        paddingTop: 12,
        '@media (max-width: 320px)': {
            width: '244px',
        },
    },
    signUpButton: {
        margin: '16px 6px'
    },
    colorRed: {
        color: 'red'
    }
};

class SignInPage extends React.Component {

    state = {
        userName: '',
        signInPassword: '',
        showPassword: false,
        invalidCredentials: false,
        loginAttempted: false,
    };

    signIn = () => {
        const { handleSignIn } = this.props;
        const { userName, signInPassword } = this.state;
        this.setState({ loginAttempted: true });
        if (!userName.trim() || !signInPassword.trim()) { 
            return;
        }
        const getUserName = window.localStorage.getItem('username');
        const getPassword = window.localStorage.getItem('password');
        if ((getUserName === userName) && (getPassword === signInPassword)) {
            handleSignIn();
        } else {
            this.setState({ invalidCredentials: true });
        }
    }

    render() {
        const { classes } = this.props;
        const { userName, signInPassword, loginAttempted, invalidCredentials } = this.state;
        const title = 'Please Sign In to Continue';

        return (
            <Grid container={true} className={classes.root} >
                <Grid item={true} xs={12} className={classes.titleHeader}>
                    <h1 className={classes.colorPrimary}>
                        {title}
                    </h1>
                </Grid>

                <Grid item={true} xs={12} className={classes.formSection}>
                    <FormControl
                        className={classes.margin}
                    >
                        <TextField
                            label="Your Email or UserName"
                            error={(loginAttempted && !userName) || invalidCredentials}
                            className={classes.width100}
                            tabIndex={1}
                            name="email_or_username"
                            type="text"
                            id="email"
                            value={userName}
                            onChange={(e) => this.setState({ userName: e.target.value })}
                        />
                        {loginAttempted && !userName.trim() ?
                            <FormHelperText className={classes.colorRed}>
                                Please enter your username
                            </FormHelperText>
                            :  invalidCredentials ?
                            <FormHelperText className={classes.colorRed}>
                                Sorry, these credentials are invalid.
                                </FormHelperText>
                            : null
                        }
                    </FormControl>
                    <FormControl
                        className={classes.margin}
                    >
                        <TextField
                            label="Password"
                            error={(loginAttempted && !signInPassword) || invalidCredentials}
                            className={classes.width100}
                            tabIndex={1}
                            name="password"
                            type="text"
                            id="password"
                            value={signInPassword}
                            onChange={(e) => this.setState({ signInPassword: e.target.value })}
                        />
                        {loginAttempted && !signInPassword ?
                            <FormHelperText className={classes.colorRed}>
                                Please enter your password
                            </FormHelperText>
                            : invalidCredentials ?
                                <FormHelperText className={classes.colorRed}>
                                    Sorry, these credentials are invalid.
                                    </FormHelperText>
                                : null
                        }
                    </FormControl>
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.signUpButton}
                        onClick={() => this.signIn()}
                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(SignInPage);
