import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        position: 'absolute',
        bottom: '290px',
        left: '290px',
        border: '0px',
        zIndex: 2500,
        // margin: '0px',
    },
    input: {
        display: 'none',
    },
});

class SwitchButton extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <IconButton
                    className={classes.button}
                    aria-label="Fullscreen"
                    onClick={this.props.onClick}
                    color="primary"
                >
                    <FullscreenIcon />
                </IconButton>
            </div>
        );
    }
}

SwitchButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchButton);
