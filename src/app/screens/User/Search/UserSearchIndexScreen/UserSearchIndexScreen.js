import React, {Component} from 'react';
import {View } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'
import { createFacebookItem } from "../../../../flux/Facebook/FacebookActions";
import styles from './styles';
import FacebookStore from "../../../../flux/Facebook/FacebookStore";

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
        this.loadItem = this.loadItem.bind(this);
    };

    goBack () {
        this.props.navigation.goBack()
    }

    componentDidMount() {
        FacebookStore.addChangeListener(this.loadItem);
        this.loadItem();
    }

    componentWillUnmount () {
        FacebookStore.removeChangeListener(this.loadItem);
    }

    // nacita token z AsyncStorage
    loadItem () {
        FacebookStore.getItem().then(facebookItem => {
            this.setState({ token: facebookItem.token });
        });
    }

    // prihlasenie k FB
    async logIn() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
            permissions: ['public_profile'],
        });

        if (type === 'success') {

            //ulozi token do AsyncStorage po prihlaseni
            let facebookItem = {
                token: token,
            };

            createFacebookItem(facebookItem);
            this.setState({ token });
            this.handleButtonPress();
        }
    }

    handleButtonPress () {
        console.log(this.state.token);
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