import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setFilter} from '../actions';


const Link = ({children, active, setFilter}) => {
  if(active) {
    return <span className="filter-link selected">{children}</span>
  }else {
    return <a href="#" className="filter-link" onClick={(e) => {
      e.preventDefault();
      setFilter();
    }}>{children}</a>
  }
};
Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired
};


const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: () => {
      dispatch(setFilter(ownProps.filter));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);