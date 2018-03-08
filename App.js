import React, { Component } from 'react';
import Application from './src/app';

export default class App extends Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

  render() {
    return (
            <Application/>
    );
  }
}
