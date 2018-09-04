import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        position: 'absolute',
        bottom: '50px',
        border: '0px',
        zIndex: 2000,
        // margin: '0px',
        right: '50px',
    },
});

function MenuButton(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="fab" color="primary" aria-label="Menu" className={classes.button}>
                <Icon>more_vert_icon</Icon>
            </Button>
        </div>
    );
}

MenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButton);
