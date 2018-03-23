import React from 'react';
import {
    Container, Text, Button, Toast, Separator, Content, ListItem, Label, Body, Input, View,
    Form, Item
} from 'native-base';
import MeetingStore from "../../../flux/Meeting/MeetingStore";
import Header from '../../../components/Header/Header'
import { deleteMeetingItem } from './../../../flux/Meeting/MeetingActions'

import styles from './styles';

class MeetingUpdateScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: this.props.meetingItem,
            name: this.props.meetingItem.getName(),
            place: this.props.meetingItem.getPlace(),
            note: this.props.meetingItem.getNote(),
        };

        this.goBack = this.goBack.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    };

    goBack () {
        this.props.modalVisible(false);
    }

    handleDeleteItem () {
        deleteMeetingItem(this.state.meetingItem.id);
        this.goBack();
        Toast.show({
            text: 'Schôdzka bola zmazaná.',
            position: 'bottom',
            buttonText: 'OK',
            duration: 3000,
            type: 'success'
        });
    }

    render () {
        const { meetingItem } = this.state;

        return (
            <Container>
                <Header
                    title={meetingItem.name}
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText }>Zrušiť</Text>
                        </Button>
                    }
                    right={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText }>Uložiť</Text>
                        </Button>
                    }
                />
                <Content>
                    <Separator bordered>
                        <Text>INFORMÁCIE</Text>
                    </Separator>
                    <Form>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label >Názov</Label>
                            <Input autoCorrect={false} value={ this.state.name } onChangeText={(name) => this.setState({name})} style={{ height: 30}}/>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label >Dátum a čas</Label>
                        </Item>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Miesto</Label>
                            <Input autoCorrect={false} value={ this.state.place } onChangeText={(place) => this.setState({place})} style={{ height: 30}}/>
                        </Item>
                        <Separator bordered>
                            <Text>POZNÁMKA</Text>
                        </Separator>
                        <Item>
                            <Input autoCorrect={false} placeholder='Zadajte poznámku' multiline={true} numberOfLines={4} onChangeText={(note) => this.setState({note})} style={{ height: 200}}/>
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

export default MeetingUpdateScreen;