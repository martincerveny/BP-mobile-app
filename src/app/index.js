import React from 'react';
import AppNavigation from "./navigations/AppNavigation";
import { Root } from 'native-base';
import Seeds from "./seeds/Seeds";

class App extends React.Component {
    componentDidMount() {
        Seeds.seed()
    }

    render() {
        return (
            <Root>
                <AppNavigation/>
            </Root>
        );
    }
}

export default App;