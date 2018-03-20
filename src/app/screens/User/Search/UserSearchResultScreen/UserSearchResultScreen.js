import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Input, Left, Button, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'
import SearchResultList from '../../../../components/SearchResultList/SearchResultList'
import { ActivityIndicator, View } from 'react-native';
import { WebBrowser } from 'expo';

import styles from './styles';
import FacebookApiFetchService from "../../../../services/FacebookApi/FacebookApiFetchService";

class UserSearchResultScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: null
        };

        this.goBack = this.goBack.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
        this.handleItemPress = this.handleItemPress.bind(this);
        this.handleCreateUserItem = this.handleCreateUserItem.bind(this);
    };

    goBack () {
        this.props.navigation.goBack()
    }

    componentDidMount () {
        this.getSearchResults();
    }

    getSearchResults () {
        FacebookApiFetchService.getUsers(this.props.navigation.state.params.token, this.props.navigation.state.params.term).then(items => {
            this.setState({ items })
        });
    }

    handleItemPress (url) {
        WebBrowser.openBrowserAsync(url);
    }

    handleCreateUserItem (item) {
        console.log(item);
        this.props.navigation.goBack()
    }

    render () {
        const { items } = this.state;

        return (
            <Container style={ styles.container } >
                <Header
                    title='Výsledky hľadania'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
                <Content>
                    {
                        items == null
                            ? (<View style={ styles.loading }><ActivityIndicator animating={true} size="large" color="#e74c3c" /></View>)
                            : (items == ''
                                ? (<View style={ styles.noResultsView }><Text style={ styles.noResultsText }>Žiadne výsledky</Text></View>)
                                : (<SearchResultList createItemOnPress={this.handleCreateUserItem} onItemPress={this.handleItemPress} items={items}/>))
                    }

                </Content>
            </Container>
        );
    }
}

export default UserSearchResultScreen;