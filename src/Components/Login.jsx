import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: 'white',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    box: {
        height: 240,
        marginTop: 'auto',
        color: '#0d0c0c',
        width: 250,
        margin: '0 auto',
        backgroundColor: '#fffff',
        textAlign: 'center',
    },
    text: {
        width: '100%',
        fontSize: '15%',
    },
    btn: {
        width: '12%',
        height: '10%',
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
                <form className={classes.text} noValidate autoComplete="off">
                    <TextField label="Enter Username" color="secondary" />
                    <TextField label="Enter Password" color="secondary" />
                </form>
                <br />
                <Button variant="contained" className={classes.btn} color="primary">
                    Login                    
                </Button>
            </Paper>
        </div>
    );
}