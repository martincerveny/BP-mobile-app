import React from 'react';
import { View } from 'react-native';
import {Container, Content, Text, ListItem, Input, Label, Button, Toast, Separator, Icon, Left} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';
import Header from '../../../components/Header/Header'
import { createOrUpdateMeetingItem } from './../../../flux/Meeting/MeetingActions'
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
            isDatePickerVisible: false,
            isTimePickerVisible: false,
        };

        this.goBack = this.goBack.bind(this)
        this.handleCreateItem = this.handleCreateItem.bind(this);
    };

    _showDatePicker = () => this.setState({ isDatePickerVisible: true });
    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

    _showTimePicker = () => this.setState({ isTimePickerVisible: true });
    _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({
            date: date.toLocaleDateString(),
        });
        this._hideDatePicker();
    };

    _handleTimePicked = (time) => {
        let timeParse = time.toLocaleTimeString();

        this.setState({
            time: timeParse.substring(0, timeParse.indexOf(':', timeParse.indexOf(':')+1))
        });

        this._hideTimePicker();
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
            note: ''
        };

        createOrUpdateMeetingItem(meetingItem);

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
                    <ListItem style={ styles.listItem }>
                        <Left>
                            <Icon active name="ios-information-circle-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 43, marginLeft: 5}}/>
                            <Input placeholder='Názov' autoCorrect={false} onChangeText={(name) => this.setState({name})} style={{ height: 30, paddingLeft: 10}}/>
                        </Left>
                    </ListItem>
                    <ListItem onPress={this._showDatePicker} style={ styles.listItem }>
                        <Left>
                            <Icon active name="ios-calendar-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 50, marginLeft: 5}}/>
                            <Label > {this.state.date}</Label>
                            <DateTimePicker
                                isVisible={this.state.isDatePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDatePicker}
                                cancelTextIOS={'Zrušiť'}
                                confirmTextIOS={'Potvrdiť'}
                                titleIOS={'Vybrať dátum'}
                                mode={'date'}
                            />
                        </Left>
                    </ListItem>
                    <ListItem onPress={this._showTimePicker} style={ styles.listItem }>
                        <Left>
                            <Icon active name="ios-time-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 50, marginLeft: 5}}/>
                            <Label > {this.state.time}</Label>
                            <DateTimePicker
                                isVisible={this.state.isTimePickerVisible}
                                onConfirm={this._handleTimePicked}
                                onCancel={this._hideTimePicker}
                                cancelTextIOS={'Zrušiť'}
                                confirmTextIOS={'Potvrdiť'}
                                titleIOS={'Vybrať čas'}
                                mode={'time'}
                            />
                        </Left>
                    </ListItem>
                    <ListItem style={ styles.listItem }>
                        <Left>
                            <Icon active name="ios-pin-outline" style={{ fontSize: 30, color: '#e74c3c', paddingRight: 42, marginLeft: 8}}/>
                            <Input placeholder='Miesto' autoCorrect={false} onChangeText={(place) => this.setState({place})} style={{ height: 30, paddingLeft: 10}}/>
                        </Left>
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

export default MeetingCreateScreen;