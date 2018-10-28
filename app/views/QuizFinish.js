import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export class QuizFinish extends React.Component{
  static navigationOptions = {
    header: null,
  }

  exitQuiz = () => {
    this.props.navigation.navigate('HomeRT');
  }

  render(){
    let userScore = this.props.navigation.getParam('score', 'Error - No score returned');
    let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed question');
    let totalQuestion = this.props.navigation.getParam('questions', 'Error - No questions returned');


    return (
      <View style={styles.container}>
        <Text>Your scored: {userScore}</Text>
        <Text>You missed {questionsMissed} questions out of {totalQuestion}</Text>

        <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
          <Text>Finish Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%'
  }
});