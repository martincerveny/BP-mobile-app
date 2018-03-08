import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Container, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'

import styles from './styles';

class UserSearchIndexScreen extends Component {
    constructor (props) {
        super(props);

        this.goBack = this.goBack.bind(this)
    };

    goBack () {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <Container >
                <Header
                    title='Pridať osobu'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
                <View style={ styles.container }>
                    <Content>
                        <Form>
                            <View style={ styles.searchBox}>
                                <Item rounded style={{ width: 200}}>
                                    <Input placeholder="Zadajte meno" />
                                </Item>
                            </View>
                            <View style={ styles.buttonContainer }>
                                <Button iconLeft danger onPress={() => {this.props.navigation.navigate('user.search.results')}}>
                                    <Icon name='search' />
                                    <Text>Vyhľadať</Text>
                                </Button>
                                <Button iconLeft danger onPress={() => {this.props.navigation.navigate('user.create')}}>
                                    <Icon name='search' />
                                    <Text>Vytvoriť </Text>
                                </Button>
                            </View>
                        </Form>
                    </Content>
                </View>
            </Container>
        );
    }
}

export default UserSearchIndexScreen;