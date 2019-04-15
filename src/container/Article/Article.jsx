import React from 'react';
import { connect } from 'react-redux';

const Article = (props) => {
    let { state } = props;
    console.log(props);
    return (
        <div className="content-container" state={state}>Article</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDispatch: (action) => {
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);