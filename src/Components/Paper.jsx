import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    box: {
        height: 240,
        color: 'white',
        width: 200,
        margin: '0 auto',
        backgroundColor: '#0d0c0c',
        textAlign: 'center',
    }
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.box}>
                <h4>
                    Login
                </h4>
            </Paper>
        </div>
    );
}