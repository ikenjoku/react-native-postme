import React from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  StyleSheet,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';

export class Login extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  clearFields = () => {
    this.setState({
      username: '',
      password: ''
    });
  }

  loginUser = () => {
    const { username, password } = this.state;
    if(!username){
      Alert.alert('Username is required')
    } else if (!password){
      Alert.alert('Passwords is required')
    } else {
      AsyncStorage.getItem('userLoggedIn', (err, result) => {
        if(result !== 'none'){
          Alert.alert(`Someone already logged on`);
          this.props.navigation.navigate('LessonsRT');
        } else {
          AsyncStorage.getItem(username, (err, result) => {
            if(result !== null){
              if(result !== password){
                Alert.alert('Incorrect Password')
              } else {
                AsyncStorage.setItem('userLoggedIn', username, (err, result) => {
                  Alert.alert(`${username} logged in`);
                  this.props.navigation.navigate('HomeRT');
                });
              }
            } else {
              Alert.alert(`No account found for ${username}`)
            }
          });
        }

      });
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />
        <Text style={styles.labels}>Enter Username</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
          value={this.state.password}
        />
        <Text style={styles.labels}>Enter Password</Text>

        <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
          <Text style={styles.button}>
            Login
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
          <Text style={styles.button}>
            Clear
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
    paddingBottom: '45%',
    paddingTop: '10%'
  },
  heading: {
    flex: 1,
    fontSize: 16
  },
  inputs: {
    width: '80%',
    padding: 10,
    flex: 1,
  },
  labels: {
    paddingBottom: 3
  },
  button: {
    marginTop: 15,
    fontSize: 16,
  },
});