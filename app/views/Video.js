import React from 'react';
import { Text, View, TouchableWithoutFeedback, FlatList, Image } from 'react-native';

export class Video extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this.state = {
      listLoaded: false,
      videoList: []
    };
  }

componentDidMount(){
  fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyA1TZTm6UqNQoDrbNbOxjuTNyM_kOMkFqA')
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
      this.setState({
        videoList: Array.from(responseJson.items),
        listLoaded: true,
      })
    })
    .catch(error => {
      console.log(error);
    })

}

  render(){
    return (
      <View>
        {this.state.videoList.length > 0 && (
          <View style={{paddingTop: 30}}>
            <FlatList
              data={this.state.videoList}
              renderItem={({item}) =>
                <TubeItem
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                />
              }
            />
          </View>
        )}

        {!this.state.videoList.length === 0 && (
          <View style={{paddingTop: 30}}>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
    );
  }
};

export class TubeItem extends React.Component{
  onPress = () => {
    console.log(this.props.id);
  }

  render(){
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{paddingTop: 20, alignItems: 'center'}}>
          <Image
            style={{ width: '100%', height: 200 }}
            source={{ uri: this.props.imageSrc }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};