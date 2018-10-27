import React from "react";
import { WebView } from "react-native";

export class VideoDetail extends React.Component{
  static navigationOptions = {
    header: null
  }

  render(){
    let tubeId = this.props.navigation.getParam('ytubeId', 'No Video')
    let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
    return (
      <WebView
        style={{ paddingTop: 40 }}
        javaScriptEnabled={true}
        source={{ uri: tubeUrl }}
      />
    );
  }
};