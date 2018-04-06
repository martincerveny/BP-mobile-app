import React from 'react';
import {Modal, View} from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text, Icon } from 'native-base';
import Header from '../../../../components/Header/Header'
import { createFacebookItem } from "../../../../flux/Facebook/FacebookActions";
import styles from './styles';
import FacebookStore from "../../../../flux/Facebook/FacebookStore";
import UserSearchResultScreen from "../UserSearchResultScreen/UserSearchResultScreen";
import UserAddFromListScreen from "../../UserAddFromListScreen/UserAddFromListScreen";
import UserCreateScreen from "../../UserCreateScreen/UserCreateScreen";

const APP_ID = '247167225824874';

class UserSearchIndexScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            token: null,
            term: '',
            userSearchResultModalVisible: false,
            userAddFromListModalVisible: false,
            userCreateModalVisible: false,
        };

        this.goBack = this.goBack.bind(this);
        this.logIn = this.logIn.bind(this);
        this.loadItem = this.loadItem.bind(this);
        this.setUserSearchResultModalVisible = this.setUserSearchResultModalVisible.bind(this);
        this.setUserAddFromListModalVisible = this.setUserAddFromListModalVisible.bind(this);
        this.setUserCreateModalVisible = this.setUserCreateModalVisible.bind(this);
    };

    setUserSearchResultModalVisible(visible) {
        this.setState({userSearchResultModalVisible: visible});
    }

    setUserAddFromListModalVisible(visible) {
        this.setState({userAddFromListModalVisible: visible});
    }

    setUserCreateModalVisible(visible) {
        this.setState({userCreateModalVisible: visible});
    }

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
            permissions: ['public_profile', 'email', 'user_friends'],
        });

        if (type === 'success') {

            //ulozi token do AsyncStorage po prihlaseni
            let facebookItem = {
                token: token,
            };

            createFacebookItem(facebookItem);
            this.setState({ token });
            this.setUserSearchResultModalVisible(true);
        }
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
                    right={
                        <Button transparent onPress={() => {this.setUserCreateModalVisible()}}>
                            <Icon style={{ color: '#fff'}} name="add" />
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
                                        : (<Button iconLeft danger onPress={() => {this.setUserSearchResultModalVisible(true)}}><Icon name='search' /><Text>Vyhľadať</Text></Button>)
                                }


                                <Button iconLeft danger onPress={() => {this.setUserAddFromListModalVisible()}}>
                                    <Icon name='list' />
                                    <Text>Zoznam</Text>
                                </Button>
                            </View>
                        </Form>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.userSearchResultModalVisible}
                        >
                            <UserSearchResultScreen
                                modalVisible={this.setUserSearchResultModalVisible}
                                token={this.state.token}
                                term={this.state.term}
                                meetingId={this.props.navigation.state.params.meetingId}
                            />
                        </Modal>


                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.userAddFromListModalVisible}
                        >
                            <UserAddFromListScreen
                                modalVisible={this.setUserAddFromListModalVisible}
                                navigation={this.props.navigation}
                                meetingId={this.props.navigation.state.params.meetingId}
                            />
                        </Modal>

                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.userCreateModalVisible}
                        >
                            <UserCreateScreen
                                modalVisible={this.setUserCreateModalVisible}
                                meetingId={this.props.navigation.state.params.meetingId}
                            />
                        </Modal>
                    </Content>
                </View>
            </Container>
        );
    }
}

export default UserSearchIndexScreen;