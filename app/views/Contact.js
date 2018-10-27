import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from './sections/Header'


export class Contact extends React.Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props);
    this.state = {
      name: 'Enter your name',
      email: 'Enter your email',
      msg: 'Enter your message',
    }
  }

  clearFields = () => this.setState({name: '', email: '', msg: ''});

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.message);
    this.props.navigation.goBack();
  }
  render(){
    return (
      <View style={styles.container}>
        <Header message='Tab to Login' />
        <Text style={styles.heading}>Contact Us</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        />

        <TextInput
          style={styles.multiInput}
          onChangeText={(text) => this.setState({msg: text})}
          value={this.state.msg}
          multiline={true}
          numberOfLines={4}
        />

        <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
          <Text style={styles.buttons}>
            Send Message
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
          <Text style={styles.buttons}>
            clear
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%'
  },
  heading: {
    flex: 1,
    fontSize: 16
  },
  inputs: {
    width: '80%',
    padding: 10,
    flex: 1
  },
  multiInput: {
    width: '90%',
    paddingTop: 20,
    flex: 2
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
});