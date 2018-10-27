import React from 'react';
import { Text, StyleSheet, View, Platform, Image } from 'react-native';

export class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleUser = () => {
    this.setState(previousState => {
      return {isLoggedIn: !previousState.isLoggedIn};
    });
  }

  render(){
    let display = !this.state.isLoggedIn ? 'Sample User' : this.props.message;
    return (
      <View style={styles.headStyle}>
      <Image
        style={styles.logoStyle}
        source={ require('./img/logo.jpg') }
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