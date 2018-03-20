import React, {Component} from 'react';
import {View } from 'react-native';
import { StyleProvider, Container, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'
import FacebookApiFetchService from '../../../../services/FacebookApi/FacebookApiFetchService'

import styles from './styles';

const APP_ID = '247167225824874';

class UserSearchIndexScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            token: null,
            term: ''
        };

        this.goBack = this.goBack.bind(this);
        this.logIn = this.logIn.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
    };

    goBack () {
        this.props.navigation.goBack()
    }

    componentDidMount() {
        this.setState({token : 'EAADgzBqyBmoBAHTmrPsT9IREYPXuGwlFvXQNKCglqyehOxVdWt5rKZBKCYGLTx1SI96tFG2fTYL9ke0zcZBpd711r01mWZCuvpH0JI4tMx0hZBLGJvQuHdB8WDH0vRKy6thsMDNea8qebwVNZAkk8qwRxFZCYkCUmZA9ZAaWymZA8NeuUF1jWLCsGENIAnqvHQupNVMZAzxLPSZAAZDZD'})
    }

    async logIn() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
            permissions: ['public_profile'],
        });

        if (type === 'success') {
            this.setState({ token });
            this.handleButtonPress();
        }
    }

    handleButtonPress () {
        this.props.navigation.navigate("user.search.result", { token: this.state.token, term: this.state.term, meetingId: this.props.navigation.state.params.meetingId })
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
                                    <Input autoFocus={true} autoCorrect={false} onChangeText={(term) => this.setState({term})} placeholder="Zadajte meno" />
                                </Item>
                            </View>
                            <View style={ styles.buttonContainer }>
                                {
                                    !this.state.token
                                        ? (<Button iconLeft danger onPress={() => {this.logIn()}}><Icon name='search' /><Text>Vyhľadať</Text></Button>)
                                        : (<Button iconLeft danger onPress={this.handleButtonPress}><Icon name='search' /><Text>Vyhľadať</Text></Button>)
                                }
                                <Button iconLeft danger onPress={() => {this.props.navigation.navigate('user.addlist')}}>
                                    <Icon name='list' />
                                    <Text>Zoznam</Text>
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