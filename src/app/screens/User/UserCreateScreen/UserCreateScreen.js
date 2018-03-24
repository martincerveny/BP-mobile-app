import React, {Component} from 'react';
import { View } from 'react-native';
import {
    Container, Content, Text, Separator, ListItem, Input, Body, Label, Button, Toast} from 'native-base';
import Header from '../../../components/Header/Header'
import styles from './styles';
import {createUserItem} from "../../../flux/User/UserActions";
import AppUtils from "../../../utils/AppUtils";

class UserCreateScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: AppUtils.generateId(),
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
        this.props.modalVisible(false);
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

        this.goBack();
    }

    render() {
        return (
            <Container style={ styles.container}>
                <Header
                    title='Vytvoriť osobu'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText}>Zrušiť</Text>
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