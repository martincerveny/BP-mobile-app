import React, { Component } from 'react';
import Application from './src/app';
import Expo from "expo";

// uvodna komponenta ktora renderuje aplikaciu
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    // nacitanie fontov z NativeBase
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ loading: false });
    }

    // vyrenderuje aplikaciu az po uplnom nacitani, pokial nie je nacitana zobrazuje sa splash screen
    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }

        return (
                <Application/>
        );
      }
}
