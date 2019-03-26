import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Summary extends Component {
  render() {
    const {sum} = this.props;
    return (
        <div>Total Counter: {sum}</div>
    )
  }

}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
};
export default Summary;
