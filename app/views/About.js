import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


const aboutPostme = 'Nunc ut ornare enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget elit id erat tempor tempor nec in lorem. Proin hendrerit vestibulum risus, ornare feugiat lorem hendrerit vel. Aliquam venenatis diam id ligula sodales lobortis. Donec vitae suscipit lorem. Nam vel metus tempor, consectetur erat a';
const whatPostme = 'Nunc ut ornare enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget elit id erat tempor tempor nec in lorem. Proin hendrerit vestibulum risus, ornare feugiat lorem hendrerit vel. Aliquam venenatis diam id ligula sodales lobortis. Donec vitae suscipit lorem. Nam vel metus tempor, consectetur erat a';


export class About extends React.Component{
  static navigationOptions = {
    hearder: null
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.pics}
          source={require('./sections/img/logo.jpg')}
        />
        <Text style={styles.aboutTitle}>Who We Are</Text>
        <Text style={styles.aboutText}>{aboutPostme}</Text>

        <Image
          style={styles.pics}
          source={require('./sections/img/hero.jpg')}
        />
        <Text style={styles.aboutTitle}>What We Do</Text>
        <Text style={styles.aboutText}>{whatPostme}</Text>
        <Text
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}>
            GO BACK
        </Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#ffffff'
  },
  pics: {
    height: 300
  },
  aboutTitle: {
    paddingTop: 20,
    textAlign: 'center',
  },
  aboutText: {
    paddingBottom: 30
  },
  backButton: {
    paddingBottom: 50,
    textAlign: 'center'
  },
});