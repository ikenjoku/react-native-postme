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

export class Register extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    };
  }

  cancelRegistration = () => {
    Alert.alert('Cancelled Registration');
    this.props.navigation.navigate('HomeRT');
  }

  registerAccount = () => {
    const { username, password, confirmPassword } = this.state;
    if(!username){
      Alert.alert('Username is required')
    } else if (password !== confirmPassword){
      Alert.alert('Passwords do not match')
    } else {
      AsyncStorage.getItem(username, (err, result) => {
        if(result !== null){
          Alert.alert(`${username} already exist`);
        } else {
          AsyncStorage.setItem(username, password, (err, result) => {
            Alert.alert(`${username} account created`);
            this.props.navigation.navigate('HomeRT');
          });
        }
      });
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Register Account</Text>

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

        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({confirmPassword: text})}
          secureTextEntry={true}
          value={this.state.confirmPassword}
        />
        <Text style={styles.labels}>Confirm Password</Text>

        <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
          <Text style={styles.button}>
            Register
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.cancelRegistration} underlayColor='#31e981'>
          <Text style={styles.button}>
            Cancel
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