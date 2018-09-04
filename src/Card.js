import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = {
    card: {
        width: 300,
        height: 300,
        position: 'absolute',
        bottom: '50px',
        border: '0px',
        zIndex: 2000,
        margin: '0 0 0 0',
        padding: '0 0 0 0',
        left: '50px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const { classes } = props;
    const Content = props.content;
    return (
        <Card className={classes.card}>
            <Content />
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
