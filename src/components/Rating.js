import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps = (nextProps) => {
    let newState = {increasing: false, decreasing: false};

    if (this.props.rating < nextProps.rating) {
      newState = {increasing: true, decreasing: false};
    } else if (this.props.rating > nextProps.rating) {
      newState = {increasing: false, decreasing: true}
    }

    this.setState(Object.assign({}, this.state, newState));
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
