import React from 'react';
import AppNavigation from "./navigations/AppNavigation";
import { Root, StyleProvider } from 'native-base';
import getTheme from './../../native-base-theme/components';
import platform from './../../native-base-theme/variables/platform';
import { AsyncStorage } from 'react-native';
class App extends React.Component {

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Root>
                    <AppNavigation/>
                </Root>
            </StyleProvider>
        );
    }
}

export default App;