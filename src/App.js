/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import QuestionContainer from './components/QuestionContainer/QuestionContainer';


type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      username: '',
      pageNumber: 0,
      prevResponses: [],
      score: 0,
      total: 0,
      count: 0,
    };
  }


  setCount = (value) => {
    this.setState({ count: value });
  }
  updateCount = () => {
    console.log('Count is: ', this.state.count);
    this.setState({ count: this.state.count - 1 });
  }
  updateUsername = (value) => {
    this.setState({ username: value });
  }

  changePageNumber = (value) => {
    this.setState({ pageNumber: value });
  }

  updatePrevResponse = (value) => {
    this.setState({ prevResponses: value });
  }

  updateTotal = (value) => {
    this.setState({ total: value });
  }

  reset = () => {
    this.setState({
      username: '',
      prevResponses: [],
      score: 0,
      total: 0,
      pageNumber: 0,
    });
  }
  render() {
    if (this.state.pageNumber === 0) {
    return (
        <View style={{flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        }}>
          <Header text="Quizzy" username="" />
          <Form
            updateUsername={this.updateUsername}
            username={this.state.username}
            changePageNumber={this.changePageNumber}
            updatePrevResponse={this.updatePrevResponse}
          />
        </View>
    );
  }
  else if(this.state.pageNumber===1) {
    return(
      <View>
      <QuestionContainer
        username={this.state.username}
        prevResponses={this.state.prevResponses}
        updateTotal={this.updateTotal}
        setCount={this.setCount}
        updateCount={this.updateCount}
      />
      </View>
    );
    
  }
  }
}


