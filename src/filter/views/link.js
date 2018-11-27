import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <b className="filter selected">{children}</b>;
    } else {
        return (
            <span className="filter not-selected" onClick={(ev) => {
                onClick();
            }}>
                {children}
            </span>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
