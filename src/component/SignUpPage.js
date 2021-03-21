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

class SignUpPage extends React.Component {

    render() {
        const {
            classes,
            firstName,
            lastName,
            emailOrUsername,
            password,
            confirmPassword,
            isSignUpAttempt,
            isPasswordMatched,
            handleChangeFirstName,
            handleChangeLastName,
            handleChangeUserName,
            handleChangePassword,
            handleChangeConfirmPassword,
            onSignUp
        } = this.props;
        const title = 'Please Sign Up to Continue';

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
                            label="Your First Name"
                            className={classes.width100}
                            tabIndex={1}
                            name="user_first_name"
                            type="text"
                            id="first-name"
                            autoComplete="off"
                            value={firstName}
                            onChange={(e) => handleChangeFirstName(e)}
                            required={true}
                            error={(isSignUpAttempt && !firstName.trim())}
                        />
                        {isSignUpAttempt && !firstName.trim() ?
                                <FormHelperText className={classes.colorRed}>
                                    Please enter your First Name
                                </FormHelperText>
                                : null
                        }
                    </FormControl>

                    <FormControl
                        className={classes.margin}
                    >
                        <TextField
                            label="Your Last Name"
                            className={classes.width100}
                            tabIndex={1}
                            name="user_last_name"
                            type="text"
                            autoComplete="off"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => handleChangeLastName(e)}
                            required={true}
                            error={(isSignUpAttempt && !lastName.trim())}
                        />
                        {isSignUpAttempt && !lastName.trim() ?
                            <FormHelperText className={classes.colorRed}>
                                Please enter your Last Name
                            </FormHelperText>
                            : null
                        }
                    </FormControl>
                    <FormControl
                        className={classes.margin}
                    >
                        <TextField
                            label="Your Email or UserName"
                            className={classes.width100}
                            tabIndex={1}
                            name="email_or_username"
                            type="text"
                            id="email"
                            autoComplete="off"
                            value={emailOrUsername}
                            onChange={(e) => handleChangeUserName(e)}
                            required={true}
                            error={(isSignUpAttempt && !emailOrUsername.trim())}
                        />
                        {isSignUpAttempt && !emailOrUsername.trim() ?
                            <FormHelperText className={classes.colorRed}>
                                Please enter your Email or User Name
                            </FormHelperText>
                            : null
                        }
                    </FormControl>
                    <FormControl
                        className={classes.margin}
                    >
                        <TextField
                            label="Password"
                            className={classes.width100}
                            tabIndex={1}
                            name="password"
                            type="text"
                            autoComplete="off"
                            id="password"
                            value={password}
                            onChange={(e) => handleChangePassword(e)}
                            required={true}
                            error={(isSignUpAttempt && !password.trim())}
                        />
                        {isSignUpAttempt && !password.trim() ?
                            <FormHelperText className={classes.colorRed}>
                                Please enter your Password
                            </FormHelperText>
                            : null
                        }
                    </FormControl>
                    <FormControl
                        className={classes.margin}
                    >
                        <TextField
                            label="Confirm Your Passowrd"
                            className={classes.width100}
                            tabIndex={1}
                            name="confirm_password"
                            type="text"
                            autoComplete="off"
                            id="confirm_password"
                            value={confirmPassword}
                            onChange={(e) => handleChangeConfirmPassword(e)}
                            required={true}
                            error={(isSignUpAttempt && !confirmPassword.trim()) || (isSignUpAttempt && !isPasswordMatched)}
                        />
                        {isSignUpAttempt && !confirmPassword.trim() ?
                            <FormHelperText className={classes.colorRed}>
                                Please confirm your Password
                            </FormHelperText>
                            : null
                        }
                        {isSignUpAttempt && !isPasswordMatched ?
                            <FormHelperText className={classes.colorRed}>
                                Password is Not Matched
                            </FormHelperText>
                            : null
                        }
                    </FormControl>
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.signUpButton}
                        onClick={() => onSignUp()}
                    >
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(SignUpPage);
