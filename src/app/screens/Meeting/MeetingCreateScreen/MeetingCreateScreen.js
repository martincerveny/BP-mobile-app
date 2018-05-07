import React from 'react';
import {Container, Content, Text, ListItem, Input, Label, Button, Toast, Separator, Icon, Left} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './styles';
import Header from '../../../components/Header/Header'
import { createOrUpdateMeetingItem } from './../../../flux/Meeting/MeetingActions'
import AppUtils from "../../../utils/AppUtils";

// obrazovka vytvarania schodzok
class MeetingCreateScreen extends React.Component {
    constructor (props) {
        super(props);
        let time = new Date().toLocaleTimeString();

        this.state = {
            id: AppUtils.generateId(),
            name: '',
            date: new Date().toLocaleDateString('de-DE', {year: 'numeric', month: '2-digit', day: '2-digit'}),
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
            date: date.toLocaleDateString('de-DE', {year: 'numeric', month: '2-digit', day: '2-digit'}),
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
                    right={
                        this.state.name.trim() !== ""
                            ? (<Button transparent onPress={this.handleCreateItem}><Text style={ styles.cancelText }>Uložiť</Text></Button>)
                            : (<Button disabled transparent onPress={this.handleCreateItem}><Text style={ styles.disabledButtonText }>Uložiť</Text></Button>)
                    }
                />
                <Content>
                    <Separator bordered>
                        <Text>INFORMÁCIE</Text>
                    </Separator>
                    <ListItem style={ styles.listItem }>
                        <Left>
                            <Icon active name="ios-information-circle-outline" style={ styles.icon }/>
                            <Input placeholder='Názov' autoCorrect={false} onChangeText={(name) => this.setState({name})} style={ styles.input}/>
                        </Left>
                    </ListItem>
                    <ListItem onPress={this._showDatePicker} style={ styles.listItem }>
                        <Left>
                            <Icon active name="ios-calendar-outline" style={ styles.datePickerIcon}/>
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
                            <Icon active name="ios-time-outline" style={ styles.datePickerIcon}/>
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
                            <Icon active name="ios-pin-outline" style={ styles.icon}/>
                            <Input placeholder='Miesto' autoCorrect={false} onChangeText={(place) => this.setState({place})} style={ styles.input }/>
                        </Left>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default MeetingCreateScreen;