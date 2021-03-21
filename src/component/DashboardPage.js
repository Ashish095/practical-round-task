import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

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
        justifyContent: 'center',
        flexDirection: 'column'
    },
    colorPrimary: {
        color: '#3f51b5'
    },
    colorSecondary: {
        color: '#757575'
    },
};

class DashBoardPage extends React.Component {

    render() {
        const { classes } = this.props;
        const title = 'Welcome to Dashboard Page!!!';
        const getUserName = window.localStorage.getItem('firstName');

        return (
            <Grid container={true} className={classes.root} >
                <Grid item={true} xs={12} className={classes.titleHeader}>
                    <h1 className={classes.colorPrimary}>
                        {title}
                    </h1>

                    <h4 className={classes.colorPrimary}>
                        Hello, {getUserName}
                    </h4>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(DashBoardPage);
