import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedState: this.props.checkState,
      chosenAnswer: '',
      flag: 0,
    };
  }

  render() {
      return (
        <View>
        <Text> Question {this.props.id}</Text>
        <Text> {this.props.ques} </Text>
        <Text> {this.props.options} </Text>
        </View>
      );
  }
}

// Question.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

export default Question;
