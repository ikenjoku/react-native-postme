import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home } from "./app/views/Home";
import { Contact } from "./app/views/Contact";
import { Video } from "./app/views/Video";
import { VideoDetail } from "./app/views/VideoDetail";
import { Register } from "./app/views/Register";
import { Login } from "./app/views/Login";
import { Quiz } from "./app/views/Quiz";
import { QuizFinish } from "./app/views/QuizFinish";
import { About } from "./app/views/About";


const PostMeRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  AboutRT: {
    screen: About
  },
  ContactRT: {
    screen : Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  QuizFinishRT: {
    screen: QuizFinish
  }
}, {
  initialRouteName: 'HomeRT'
});


export default class App extends React.Component {
  render() {
    return (
      <PostMeRoutes />
    );
  }
}

