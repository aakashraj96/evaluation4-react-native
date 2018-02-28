import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as styles from './Header.styles'

const Header = props => (
  <View style={styles.container}>
    <Text style={{fontSize:30}}> Welcome </Text>
    <Text style={{fontSize:30}}>to</Text>
    <Text style={{fontSize:30, color:'white'}}>Quizzy!</Text>
  </View>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Header;
