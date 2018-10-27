import React from 'react';
import { Text, StyleSheet, View, Platform, Image, AsyncStorage, Alert } from 'react-native';

export class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      loggedUser: false,
    };
  }

  toggleUser = () => {
    const { isLoggedIn, loggedUser } = this.state;
    if(isLoggedIn){
      AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
        this.setState({
          isLoggedIn: false,
          loggedUser: false
        });
        Alert.alert('You have been logged out 🙄');
      });
    } else {
      this.props.navigate('LoginRT')
    }
  }

  componentDidMount(){
    AsyncStorage.getItem('userLoggedIn', (err, result) => {
      if(result === 'none'){
        console.log('None')
      } else if (result === null){
        AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
          console.log('set user to None')
        });
      } else {
        this.setState({
          isLoggedIn: true,
          loggedUser: result
        });
      }
    });
  }

  render(){
    let display = !this.state.isLoggedIn ? this.props.message : this.state.loggedUser;
    return (
      <View style={styles.headStyle}>
      <Image
        style={styles.logoStyle}
        source={ require('./img/icon.png') }
      />
      <Text
        onPress={this.toggleUser}
        style={styles.headText}
        >
          {display}
      </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: Platform.OS === 'android' ? '#35605a' : '#5b5c5d',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000000'
  },
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20,
    flex: 1
  },
  logoStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
  }
});