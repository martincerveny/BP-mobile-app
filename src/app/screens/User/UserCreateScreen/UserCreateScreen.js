import React, {Component} from 'react';
import {
    Container, Content, Text, Separator, Input, Label, Button, Toast, Form, Item
} from 'native-base';
import Header from '../../../components/Header/Header'
import styles from './styles';
import {createOrUpdateUserItem} from "../../../flux/User/UserActions";
import AppUtils from "../../../utils/AppUtils";
import MeetingConstants from "../../../flux/Meeting/MeetingConstants";

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
        const meetingId = this.props.meetingId;

        let userItem = {
            id: this.state.id,
            meetingIds: [],
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            address: this.state.address,
            company: this.state.company,
            image: null,
            note: null
        };

        // v pripade ze sa vytvara uzivatel v ramci schodzky
        if (meetingId) {
            userItem.meetingIds.push(MeetingConstants.STORE_KEY_ITEM + meetingId);
        }

        createOrUpdateUserItem(userItem);
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
                    right={
                        this.state.firstName.trim() !== "" && this.state.lastName.trim() !== ""
                            ? (<Button transparent onPress={this.handleCreateItem}><Text style={ styles.cancelText }>Uložiť</Text></Button>)
                            : (<Button disabled transparent onPress={this.handleCreateItem}><Text style={ styles.disabledButtonText }>Uložiť</Text></Button>)
                    }
                />
                <Content>
                    <Form>
                        <Separator bordered>
                            <Text>ZÁKLADNÉ INFORMÁCIE</Text>
                        </Separator>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Meno:</Label>
                            <Input autoCorrect={false} onChangeText={(firstName) => this.setState({firstName})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Priezvisko:</Label>
                            <Input autoCorrect={false} onChangeText={(lastName) => this.setState({lastName})}/>
                        </Item>
                        <Separator bordered style={{ marginTop: -1}}>
                            <Text>ROZŠÍRENÉ INFORMÁCIE</Text>
                        </Separator>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Vek:</Label>
                            <Input keyboardType='numeric' autoCorrect={false} onChangeText={(age) => this.setState({age})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Bydlisko:</Label>
                            <Input autoCorrect={false} onChangeText={(address) => this.setState({address})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Firma:</Label>
                            <Input autoCorrect={false} onChangeText={(company) => this.setState({company})}/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default UserCreateScreen;