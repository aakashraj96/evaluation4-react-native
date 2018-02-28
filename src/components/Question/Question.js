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
    const options = Object.keys(JSON.parse(this.props.options)).map((key) => {
      return (<Text> {JSON.parse(this.props.options)[key]} </Text>);
    })
      return (
        <View style={{backgroundColor:'#44C7F5', margin:10}}>
        <Text> Question {this.props.id}</Text>
        <Text> {this.props.ques} </Text>
        {options}
        </View>
      );
  }
}

// Question.propTypes = {
//   text: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
// };

export default Question;
