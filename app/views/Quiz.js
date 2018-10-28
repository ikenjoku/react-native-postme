import React from "react";
import { Text, View, TouchableHighlight, FlatList, StyleSheet } from "react-native";
import { QuizData } from '../data/QuizQuestions';
import { Questions } from './sections/Questions';


export class Quiz extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this.state = {
      questLoaded: false,
      totalScore: 100,
      quizCompleted: false,
      incorrect: 0
    };
  };

  componentDidMount(){
    let questions = Array.from(QuizData.questions);
    let numQuestions = questions.length;
    this.setState({
      questList: questions,
      questLoaded: true,
      numberOfQuestions: numQuestions,
      questionAnswered: 0
    });
  }

  updateScore = (penalty) => {
    let tempScore = this.state.totalScore;
    let missed = this.state.incorrect;
    let questionTotal = this.state.numberOfQuestions;
    let questionDone = this.state.questionAnswered;

    let newScore = tempScore - penalty;
    let totalAnswered = questionDone + 1;
    let totalMissed = penalty ? missed + 1 : missed;

    this.setState({
      totalScore: newScore,
      incorrect: totalMissed,
      questionAnswered: totalAnswered,
    });

    if( totalAnswered === questionTotal ){
      this.setState({ quizCompleted: true });
    }
  };

  finishQuiz = () => {
    this.props.navigation.navigate('QuizFinishRT', {
      score: this.state.totalScore,
      missed: this.state.incorrect,
      questions: this.state.numberOfQuestions
    });
  }

  render(){
    return (
      <View style={styles.container}>
        { this.state.questLoaded && (
          <FlatList
            data= {this.state.questList}
            renderItem={({item}) =>
            <Questions
              question={item.question}
              answer1={item.answer1}
              answer2={item.answer2}
              answer3={item.answer3}
              answer4={item.answer4}
              correctAnswer={item.correctAnswer}
              scoreUpdate={this.updateScore}
            />
          }
          />
        ) }

        {!this.state.quizCompleted && (
          <TouchableHighlight style={styles.disabled}>
            <Text>Answer all the questions</Text>
          </TouchableHighlight>
        )}

        {this.state.quizCompleted && (
          <TouchableHighlight style={styles.enabled} onPress={this.finishQuiz}>
            <Text>Finished</Text>
          </TouchableHighlight>
        )}

        {
          !this.state.questLoaded && (
            <Text>LOADING</Text>
          )
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  disabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    height: '10%'
  },
  enabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90ee90',
    height: '10%'
  }
});