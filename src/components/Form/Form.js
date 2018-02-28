import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import * as styles from './Form.styles'


const Form = props => (
      <View >
        <View style={styles.formStyle}>
          <Text > Login </Text>
          <Text > Username: </Text>
          <TextInput style={styles.inputStyle} onChangeText={(value) => {
          props.updateUsername(value);
        }}
      value={props.username}/>
          <Button title="Login" onPress={() => {
            fetch('http://localhost:8080/login', {
              method: 'post',
              headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: props.username,
              }),
            }).then(resp => resp.json()).then((data) => {
              console.log(data);
              props.changePageNumber(1);
              props.updatePrevResponse(data.prevResponse);
              // alert(JSON.stringify(data.prevResponse[0]));
            });
          }}/>
        </View>
    </View>

  
);

  // Form.propTypes = {
  //
  // };

export default Form;
