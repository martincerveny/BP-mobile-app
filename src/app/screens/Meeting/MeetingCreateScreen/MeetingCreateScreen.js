import React from 'react';
import { View } from 'react-native';
import {Container, Content, Text, ListItem, Input, Label, Button, Toast, Separator} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';
import Header from '../../../components/Header/Header'
import { createMeetingItem } from './../../../flux/Meeting/MeetingActions'
import AppUtils from "../../../utils/AppUtils";

class MeetingCreateScreen extends React.Component {
    constructor (props) {
        super(props);
        let time = new Date().toLocaleTimeString();

        this.state = {
            id: AppUtils.generateId(),
            name: '',
            date: new Date().toLocaleDateString(),
            time: time.substring(0, time.indexOf(':', time.indexOf(':')+1)),
            place: '',
            isDateTimePickerVisible: false,

        };
        this.goBack = this.goBack.bind(this)
        this.handleCreateItem = this.handleCreateItem.bind(this);
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (dateTime) => {
        let time = dateTime.toLocaleTimeString();
        // console.log(dateTime);
        this.setState({
            date: dateTime.toLocaleDateString(),
            time: time.substring(0, time.indexOf(':', time.indexOf(':')+1))
        });

        this._hideDateTimePicker();
    };

    goBack () {
        this.props.modalVisible(false);
    }

    handleCreateItem () {
        let meetingItem = {
            id: this.state.id,
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            place: this.state.place,
        };

        createMeetingItem(meetingItem);
        Toast.show({
            text: 'Schôdzka bola vytvorená.',
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
                    title='Vytvoriť schôdzku'
                    left={
                        <Button transparent onPress={this.goBack}>
                            <Text style={ styles.cancelText}>Zrušiť</Text>
                        </Button>
                    }
                />
                <Content>
                    <Separator bordered>
                        <Text>INFORMÁCIE</Text>
                    </Separator>
                    <ListItem last>
                        <Label >Názov:</Label>
                            <Input onChangeText={(name) => this.setState({name})} style={{ height: 30, paddingLeft: 10}}/>
                    </ListItem>
                    <ListItem last onPress={this._showDateTimePicker}>
                        <Label>Dátum a čas:</Label>
                        <Label > {this.state.date}, {this.state.time}</Label>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                cancelTextIOS={'Zrušiť'}
                                confirmTextIOS={'Potvrdiť'}
                                titleIOS={'Vybrať dátum'}
                                mode={'datetime'}
                            />

                    </ListItem>
                    <ListItem last>
                        <Label >Miesto:</Label>
                            <Input onChangeText={(place) => this.setState({place})} style={{ height: 30, paddingLeft: 10}}/>
                    </ListItem>
                    <View style={ styles.buttonContainer }>
                        <Button  danger onPress={this.handleCreateItem}>
                            <Text>Uložiť </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default MeetingCreateScreen;