import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container, Content, Text, Icon, Left, Separator, ListItem, List, Right, Input, Body, Label, Button, Picker,
    Toast
} from 'native-base';
import Header from '../../../components/Header/Header'

import styles from './styles';
import MeetingConstants from "../../../flux/Meeting/MeetingConstants";
import {createMeetingItem} from "../../../flux/Meeting/MeetingActions";
import {createUserItem} from "../../../flux/User/UserActions";

class UserCreateScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: this.generateId(),
            firstName: '',
            lastName: '',
            age: '',
            address: '',
            company: '',
        };
        this.goBack = this.goBack.bind(this);
        this.handleCreateItem = this.handleCreateItem.bind(this);
    }

    goBack () {
        this.props.navigation.goBack()
    }

    generateId() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    handleCreateItem () {
        let userItem = {
            id: this.state.id,
            meetingIds: [],
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            address: this.state.address,
            company: this.state.company,
            image: '',
            note: ''
        };

        createUserItem(userItem);
        Toast.show({
            text: 'Užívateľ bol vytvorený.',
            position: 'bottom',
            buttonText: 'OK',
            duration: 3000,
            type: 'success'
        });
        this.props.navigation.navigate("user.list")
    }

    render() {
        return (
            <Container style={ styles.container}>
                <Header
                    title='Vytvoriť osobu'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Icon style={{ color: '#fff'}} name="arrow-round-back" />
                        </Button>
                    }
                />
                <Content>
                    <Separator bordered>
                        <Text>ZÁKLADNÉ INFORMÁCIE</Text>
                    </Separator>
                    <ListItem last>
                        <Label >Meno:</Label>
                        <Body>
                            <Input onChangeText={(firstName) => this.setState({firstName})} style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Priezvisko:</Label>
                        <Body>
                            <Input onChangeText={(lastName) => this.setState({lastName})} style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Vek:</Label>
                        <Body>
                            <Input onChangeText={(age) => this.setState({age})} style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <Separator bordered>
                        <Text>ROZŠÍRENÉ INFORMÁCIE</Text>
                    </Separator>
                    <ListItem last>
                        <Label >Bydlisko:</Label>
                        <Body>
                            <Input onChangeText={(address) => this.setState({address})} style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <ListItem last>
                        <Label >Firma:</Label>
                        <Body>
                            <Input onChangeText={(company) => this.setState({company})} style={{ height: 30, paddingLeft: 10}}/>
                        </Body>
                    </ListItem>
                    <View style={ styles.buttonContainer }>
                        <Button danger onPress={this.handleCreateItem}>
                            <Text>Uložiť </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default UserCreateScreen;