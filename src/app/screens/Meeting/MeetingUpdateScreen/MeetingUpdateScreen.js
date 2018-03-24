import React from 'react';
import _ from 'lodash';
import {
    Container, Text, Button, Toast, Separator, Content, Label, Input, View, Form, Item,
    ListItem
} from 'native-base';
import Header from '../../../components/Header/Header'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { deleteMeetingItem } from './../../../flux/Meeting/MeetingActions'

import styles from './styles';
import {createOrUpdateMeetingItem} from "../../../flux/Meeting/MeetingActions";

class MeetingUpdateScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            meetingItem: this.props.meetingItem,
            name: this.props.meetingItem.getName(),
            place: this.props.meetingItem.getPlace(),
            note: this.props.meetingItem.getNote(),
            date: this.props.meetingItem.getDate(),
            time: this.props.meetingItem.getTime(),
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            // day: '',
            // month: '',
            // year: '',
            // hour: '',
            // minute: '',
        };

        this.goBack = this.goBack.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
        // this.parseDateTimeToState = this.parseDateTimeToState.bind(this);
    };

    componentDidMount () {
        // this.parseDateTimeToState();
    }
    // /**
    //  *  metoda rozparsuje datum a cas z AsyncStorage do DateTimePicker componenty
    //  */
    // parseDateTimeToState () {
    //     // rozdelime datum na den, mesiac a rok
    //     let date = this.props.meetingItem.getDate().replace(/ +/g, "").split('.');
    //    // rozdelime cas na hodiny a minut
    //     let time = this.props.meetingItem.getTime().split(':');
    //     this.setState({
    //        day: date[0],
    //        month: date[1],
    //        year: date[2],
    //        hour: time[0],
    //        minute: time[1],
    //
    //     });
    // }
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

    handleUpdateItem () {
        let meetingItem = {
            id: this.props.meetingItem.getId(),
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            place: this.state.place,
            note: this.state.note
        };

        createOrUpdateMeetingItem(meetingItem);
        this.goBack();
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
                        <Button transparent onPress={this.handleUpdateItem}>
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
                            <Input autoCorrect={false} value={ this.state.name } onChangeText={(name) => this.setState({name})}/>
                        </Item>
                        <ListItem onPress={this._showDatePicker} style={ styles.formItem }>
                                <Label > {this.state.date}</Label>
                                <DateTimePicker
                                    isVisible={this.state.isDatePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDatePicker}
                                    cancelTextIOS={'Zrušiť'}
                                    confirmTextIOS={'Potvrdiť'}
                                    titleIOS={'Vybrať dátum'}
                                    mode={'date'}
                                    // date={new Date(this.state.year, this.state.month, this.state.day, this.state.hour, this.state.minute)}
                                />
                        </ListItem>
                        <ListItem onPress={this._showTimePicker} style={ styles.formItem }>
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
                        </ListItem>
                        <Item floatingLabel style={ styles.formItem }>
                            <Label>Miesto</Label>
                            <Input autoCorrect={false} value={ this.state.place } onChangeText={(place) => this.setState({place})}/>
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