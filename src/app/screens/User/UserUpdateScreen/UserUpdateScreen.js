import React, {Component} from 'react';
import { View } from 'react-native';
import {
    Container, Content, Text, Separator, Input, Body, Label, Button, Form, Item, ListItem, Thumbnail, Toast
} from 'native-base';
import Header from '../../../components/Header/Header'
import styles from './styles';
import {createOrUpdateUserItem, deleteUserItem} from "../../../flux/User/UserActions";
import {FileSystem} from "expo";

class UserUpdateScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: this.props.userItem.getFirstName(),
            lastName: this.props.userItem.getLastName(),
            age: this.props.userItem.getAge(),
            address: this.props.userItem.getAddress(),
            company: this.props.userItem.getCompany(),
            note: this.props.userItem.getNote()
        };

        this.goBack = this.goBack.bind(this);
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    goBack () {
        this.props.modalVisible(false);
    }

    handleUpdateItem () {
        let userItem = {
            id: this.props.userItem.getId(),
            meetingIds: this.props.userItem.getMeetingIds(),
            image: this.props.userItem.getImage(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            address: this.state.address,
            company: this.state.company,
            note: this.state.note
        };

        createOrUpdateUserItem(userItem);
        this.goBack();
    }

    handleDeleteItem () {
        deleteUserItem(this.props.userItem.getId());
        this.goBack();
        Toast.show({
            text: 'Užívateľ bol zmazaný.',
            position: 'bottom',
            buttonText: 'OK',
            duration: 3000,
            type: 'success'
        });
    }

    render() {
        return (
            <Container style={ styles.container}>
                <Header
                    title='Upraviť'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText }>Zrušiť</Text>
                        </Button>
                    }
                    right={
                        <Button transparent onPress={this.handleUpdateItem}>
                            <Text style={ styles.cancelText }>Uložiť</Text>
                        </Button>
                    }
                />
                <Content>
                    <ListItem>
                        {
                            this.props.userItem && this.props.userItem.getImage() == ''
                                ? (<Thumbnail size={80} source={require('./../../../../resources/images/person-flat.png')} />)
                                : (<Thumbnail size={80} source={{uri: FileSystem.documentDirectory + (this.props.userItem && this.props.userItem.getImage())}}/>)
                        }
                        <Body>
                        {
                            this.props.userItem && this.props.userItem.getImage() == ''
                                ? (<Button transparent ><Text>Pridať fotku</Text></Button>)
                                : (<Button transparent ><Text>Upraviť fotku</Text></Button>)
                        }

                        </Body>
                    </ListItem>
                    <Form>
                        <Separator bordered>
                            <Text>ZÁKLADNÉ INFORMÁCIE</Text>
                        </Separator>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label >Meno:</Label>
                            <Input autoCorrect={false} value={this.state.firstName} onChangeText={(firstName) => this.setState({firstName})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label >Priezvisko:</Label>
                            <Input autoCorrect={false} value={this.state.lastName} onChangeText={(lastName) => this.setState({lastName})}/>
                        </Item>
                        <Separator bordered style={{ marginTop: -1}}>
                            <Text>ROZŠÍRENÉ INFORMÁCIE</Text>
                        </Separator>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Vek:</Label>
                            <Input autoCorrect={false} value={this.state.age} onChangeText={(age) => this.setState({age})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Bydlisko:</Label>
                            <Input autoCorrect={false} value={this.state.address} onChangeText={(address) => this.setState({address})}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Firma:</Label>
                            <Input autoCorrect={false} value={this.state.company} onChangeText={(company) => this.setState({company})}/>
                        </Item>
                        <Separator bordered style={{ marginTop: -1}}>
                            <Text>POZNÁMKA</Text>
                        </Separator>
                        <Item>
                            <Input autoCorrect={false} value={ this.state.note } placeholder='Zadajte poznámku' multiline={true} numberOfLines={4} onChangeText={(note) => this.setState({note})} style={{ height: 150}}/>
                        </Item>
                    </Form>
                    <View style={ styles.buttonContainer }>
                        <Button danger onPress={this.handleDeleteItem}>
                            <Text>Zmazať</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default UserUpdateScreen;